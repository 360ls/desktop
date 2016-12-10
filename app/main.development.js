import fs from 'fs';
import { app, BrowserWindow, Menu, ipcMain } from 'electron';
import { exec } from 'child_process';
import { v4 } from 'uuid';
import {
  ERROR_CAUGHT,
  RECORD,
  STOP,
  REQUEST_FILE,
  RECEIVE_FILE,
  START_PREVIEW,
  STOP_PREVIEW,
  START_STREAM,
  STOP_STREAM,
  STARTED_CONVERSION,
  FINISHED_CONVERSION,
 } from './services/signals';
import {
  changeToDir,
  killProc,
  spawnPythonProc,
} from './utils/proc';
import {
  getCameraIndex,
  getIndex,
  getRecordingLocation,
  getStitcherLocation,
  getStreamUrl,
  getWidth,
  getHeight,
  getVideoPath,
} from './utils/arg';
import {
  getStitcherArgsForPreview,
  getStitcherArgsForStream,
  getStitcherArgsForRecording,
  getConversionCmd,
  getTargetPath,
  getConvertedTargetPath,
} from './utils/cmd';
import { showErrDialog } from './utils/utils';

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
      'REDUX_DEVTOOLS',
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
    height: 720,
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
        },
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

const conversionDelay = 500;
const readDelay = 1000;

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

  try {
    changeToDir(stitcherLocation);
  } catch (err) {
    showErrDialog('Configuration directory not found.');
  }

  streamProc = spawnPythonProc(
    getStitcherArgsForRecording(stitcherLocation,
      width, height, index, outPath, streamUrl));
});

ipcMain.on(STOP, (event) => {
  killProc(streamProc);
  event.sender.send(STARTED_CONVERSION, {
    id,
  });
  setTimeout(() => {
    const child = exec(getConversionCmd(outPath, convertedPath));
    child.stdout.pipe(process.stdout);
    child.on('exit', () => {
      event.sender.send(FINISHED_CONVERSION, {
        id,
        outPath: convertedPath,
      });
    });
  }, conversionDelay);
});

ipcMain.on(REQUEST_FILE, (event, arg) => {
  setTimeout(() => {
    const videoPath = getVideoPath(arg);
    fs.readFile(videoPath, (err, data) => {
      if (err) {
        showErrDialog('Could not read recorded video.');
      }
      event.sender.send(RECEIVE_FILE, {
        path: videoPath,
        data,
      });
    });
  }, readDelay);
});

ipcMain.on(START_PREVIEW, (event, arg) => {
  const stitcherLocation = getStitcherLocation(arg);
  const index = getIndex(arg);
  const width = getWidth(arg);
  const height = getHeight(arg);

  try {
    changeToDir(stitcherLocation);
  } catch (err) {
    showErrDialog('Configuration directory not found.');
  }

  previewProc = spawnPythonProc(
    getStitcherArgsForPreview(stitcherLocation, index, width, height));

  previewProc.on('error', () => {
    showErrDialog('Could not start preview.');
  });
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

  try {
    changeToDir(stitcherLocation);
  } catch (err) {
    showErrDialog('Configuration directory not found.');
  }

  stitcherProc = spawnPythonProc(
    getStitcherArgsForStream(stitcherLocation, index, streamUrl, width, height));
});

ipcMain.on(STOP_STREAM, () => {
  killProc(stitcherProc);
});

ipcMain.on(ERROR_CAUGHT, (event, arg) => {
  showErrDialog(arg.msg);
});
