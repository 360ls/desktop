import { app, BrowserWindow, Menu, ipcMain } from 'electron';
import { spawn, exec } from 'child_process';
import fs from 'fs';
import { v4 } from 'uuid';
import path from 'path';
import {
   RECORD,
   STOP,
   REQUEST_FILE,
   RECEIVE_FILE,
   STOPPED_PROC,
   START_PREVIEW,
   STOP_PREVIEW,
   START_STREAM,
   STOP_STREAM,
 } from './services/ipcDispatcher';

let mainWindow = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support'); // eslint-disable-line
  sourceMapSupport.install();
}

if (process.env.NODE_ENV === 'development') {
  require('electron-debug')(); // eslint-disable-line global-require
  const path = require('path'); // eslint-disable-line
  const p = path.join(__dirname, '..', 'app', 'node_modules'); // eslint-disable-line
  require('module').globalPaths.push(p); // eslint-disable-line
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});


const installExtensions = async () => {
  if (process.env.NODE_ENV === 'development') {
    const installer = require('electron-devtools-installer'); // eslint-disable-line global-require

    const extensions = [
      'REACT_DEVELOPER_TOOLS',
      'REDUX_DEVTOOLS'
    ];
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    for (const name of extensions) {
      try {
        await installer.default(installer[name], forceDownload);
      } catch (e) {} // eslint-disable-line
    }
  }
};

app.on('ready', async () => {
  await installExtensions();

  mainWindow = new BrowserWindow({
    show: false,
    width: 1280,
    height: 720
  });

  mainWindow.loadURL(`file://${__dirname}/app.html`);

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.openDevTools();
    mainWindow.webContents.on('context-menu', (e, props) => {
      const { x, y } = props;

      Menu.buildFromTemplate([{
        label: 'Inspect element',
        click() {
          mainWindow.inspectElement(x, y);
        }
      }]).popup(mainWindow);
    });
  }
});

let streamProc = null;
let previewProc = null;
let stitcherProc = null;
let ffmpegProc = null;
let id;
let outPath;
let convertedPath;
const stitcher = 'stitcher.py';

const killProc = (childProc) => {
  if (childProc) {
    switch (process.platform) {
      case 'darwin':
      case 'linux':
        childProc.kill();
        break;
      case 'win32':
        spawn('taskkill', ['/pid', childProc.pid, '/f', '/t']);
        break;
      default:
        console.log(process.platform);
    }
  }
};

const spawnProc = (cmd, args) => {
  let proc = null;
  switch (process.platform) {
    case 'darwin':
    case 'linux':
      proc = spawn(cmd, args);
      break;
    case 'win32':
      args.unshift(cmd);
      proc = spawn('python', args);
      break;
    default:
      console.log('unsupported platform');
  }
  return proc;
};

ipcMain.on(RECORD, (event, arg) => {
  const recordLocation = arg.recordLocation;
  const stitcherLocation = arg.stitcherLocation;
  const cmd = path.join(getHomeDirectory(), stitcherLocation, stitcher);
  const destDir = path.join(getHomeDirectory(), recordLocation);
  const streamUrl = arg.url;

  const ffmpegCmd = 'ffmpeg';
  const ffmpegArgs = [
    '-y', '-f', 'rawvideo',
    '-s', '640x480', '-pix_fmt', 'bgr24', '-i', 'pipe:0', '-vcodec',
    'libx264', '-pix_fmt', 'uyvy422', '-r', '28', '-an', '-f', 'flv', streamUrl
  ];

  id = v4();
  const ext = '.avi';
  const convertedExt = '.mp4';
  outPath = path.join(destDir, id + ext);
  convertedPath = path.join(destDir, id + convertedExt);
  const index = arg.cameraIndex;
  const width = 640;
  const height = 480;
  const args = [
    '-f', outPath,
    '-i', index,
    '--width', width,
    '--height', height,
    '-s',
  ];

  streamProc = spawnProc(cmd, args);
  ffmpegProc = spawnProc(ffmpegCmd, ffmpegArgs);

  const inStream = streamProc.stdout;
  const outStream = ffmpegProc.stdin;

  inStream.pipe(outStream);
});

ipcMain.on(STOP, (event, arg) => {
  killProc(streamProc);
  killProc(ffmpegProc);
  setTimeout(() => {
    const cmd = 'ffmpeg -i ' + outPath + ' ' + convertedPath;
    const child = exec(cmd);
    child.stdout.pipe(process.stdout);
    child.on('exit', () => {
      event.sender.send(STOPPED_PROC, {
        id,
        outPath: convertedPath,
      });
    });
  }, 500);
});

ipcMain.on(REQUEST_FILE, (event, arg) => {
  setTimeout(() => {
    const videoPath = path.join(arg.path);
    fs.readFile(videoPath, (err, data) => {
      if (err) throw err;
      event.sender.send(RECEIVE_FILE, {
        path: arg.path,
        data
      });
    });
  }, 1000);
});

ipcMain.on(START_PREVIEW, (event, arg) => {
  const stitcherLocation = arg.stitcherLocation;
  const cmd = path.join(getHomeDirectory(), stitcherLocation, stitcher);
  const index = arg.index;
  const args = ['-p', '-i', index];

  previewProc = spawnProc(cmd, args);
});

ipcMain.on(STOP_PREVIEW, (event, arg) => {
  killProc(previewProc);
});

ipcMain.on(START_STREAM, (event, arg) => {
  const stitcherLocation = arg.stitcherLocation;
  const stitcherCmd = path.join(getHomeDirectory(), stitcherLocation, stitcher);
  const index = arg.index;
  const streamUrl = arg.url;
  const stitcherArgs = ['-s', '-i', index];

  const ffmpegCmd = 'ffmpeg';
  const ffmpegArgs = [
    '-y', '-f', 'rawvideo',
    '-s', '640x480', '-pix_fmt', 'bgr24', '-i', 'pipe:0', '-vcodec',
    'libx264', '-pix_fmt', 'uyvy422', '-r', '28', '-an', '-f', 'flv', streamUrl
  ];

  stitcherProc = spawnProc(stitcherCmd, stitcherArgs);
  ffmpegProc = spawnProc(ffmpegCmd, ffmpegArgs);

  const inStream = stitcherProc.stdout;
  const outStream = ffmpegProc.stdin;

  inStream.pipe(outStream);
});

ipcMain.on(STOP_STREAM, (event, arg) => {
  killProc(stitcherProc);
  killProc(ffmpegProc);
});

const getHomeDirectory = () => {
  return process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
};
