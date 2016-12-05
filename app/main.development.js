import { app, BrowserWindow, Menu, ipcMain, dialog } from 'electron';
import { exec } from 'child_process';
import fs from 'fs';
import { v4 } from 'uuid';
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
   ERROR_CAUGHT,
 } from './services/signals';
import {
  changeToDir,
  killProc,
  spawnPythonProc,
} from './utils/proc';
import {
  getRecordingLocation,
  getStitcherLocation,
  getCameraIndex,
  getIndex,
  getStreamUrl,
  getVideoPath,
  getWidth,
  getHeight,
} from './utils/arg';
import {
  getStitcherArgsForPreview,
  getStitcherArgsForStream,
  getStitcherArgsForRecording,
  getConversionCmd,
  getTargetPath,
  getConvertedTargetPath,
} from './utils/cmd';

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
let id;
let outPath;
let convertedPath;

ipcMain.on(RECORD, (event, arg) => {
  const recordLocation = getRecordingLocation(arg);
  const stitcherLocation = getStitcherLocation(arg);
  const streamUrl = getStreamUrl(arg);

  id = v4();
  outPath = getTargetPath(recordLocation, id);
  convertedPath = getConvertedTargetPath(recordLocation, id);
  const index = getCameraIndex(arg);
  const width = getWidth(arg);
  const height = getHeight(arg);

  changeToDir(stitcherLocation);
  streamProc = spawnPythonProc(
    getStitcherArgsForRecording(stitcherLocation,
      width, height, index, outPath, streamUrl));
});

ipcMain.on(STOP, (event) => {
  killProc(streamProc);
  setTimeout(() => {
    const child = exec(getConversionCmd(outPath, convertedPath));
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
    const videoPath = getVideoPath(arg);
    fs.readFile(videoPath, (err, data) => {
      if (err) throw err;
      event.sender.send(RECEIVE_FILE, {
        path: videoPath,
        data
      });
    });
  }, 1000);
});

ipcMain.on(START_PREVIEW, (event, arg) => {
  const stitcherLocation = getStitcherLocation(arg);
  const index = getIndex(arg);
  const width = getWidth(arg);
  const height = getHeight(arg);

  changeToDir(stitcherLocation);

  previewProc = spawnPythonProc(
    getStitcherArgsForPreview(stitcherLocation, index, width, height));
});

ipcMain.on(STOP_PREVIEW, () => {
  killProc(previewProc);
});

ipcMain.on(START_STREAM, (event, arg) => {
  const stitcherLocation = getStitcherLocation(arg);
  const index = getIndex(arg);
  const streamUrl = getStreamUrl(arg);
  const width = getWidth(arg);
  const height = getHeight(arg);

  changeToDir(stitcherLocation);

  stitcherProc = spawnPythonProc(
    getStitcherArgsForStream(stitcherLocation, index, streamUrl, width, height));
});

ipcMain.on(STOP_STREAM, () => {
  killProc(stitcherProc);
});

ipcMain.on(ERROR_CAUGHT, (event, arg) => {
  dialog.showMessageBox({
    buttons: [
      'ok'
    ],
    title: 'Error',
    message: arg.msg,
  });
});
