import { ipcRenderer } from 'electron';
import { isStreaming, isPreviewing, isBroadcasting } from '../reducers/live';
import { requestVideo, receiveVideo, uploadVideo } from '../actions/video';
import {
  getRecordLocation,
  getStitcherLocation,
  getCameraIndex,
  getPreviewIndex,
  getStreamUrl,
  getWidth,
  getHeight,
} from '../reducers/preference';
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
} from './signals';

let currState = false;
export const handleChange = (store) => () => {
  const prevState = currState;
  currState = isStreaming(store.getState());

  if (prevState !== currState) {
    if (currState) {
      const storeState = store.getState();
      const arg = {
        recordLocation: getRecordLocation(storeState),
        stitcherLocation: getStitcherLocation(storeState),
        cameraIndex: getCameraIndex(storeState),
        url: getStreamUrl(storeState),
        width: getWidth(storeState),
        height: getHeight(storeState),
      };
      ipcRenderer.send(RECORD, arg);
    } else {
      ipcRenderer.send(STOP);
    }
  }
};

let currPreviewState = false;
export const handlePreviewChange = (store) => () => {
  const prevState = currPreviewState;
  const storeState = store.getState();
  currPreviewState = isPreviewing(storeState);

  if (prevState !== currPreviewState) {
    if (currPreviewState) {
      const arg = {
        index: getPreviewIndex(storeState),
        stitcherLocation: getStitcherLocation(storeState),
        width: getWidth(storeState),
        height: getHeight(storeState),
      };
      ipcRenderer.send(START_PREVIEW, arg);
    } else {
      ipcRenderer.send(STOP_PREVIEW);
    }
  }
};

let currBroadcastState = false;
export const handleBroadcastChange = (store) => () => {
  const prevState = currBroadcastState;
  const storeState = store.getState();
  currBroadcastState = isBroadcasting(storeState);

  if (prevState !== currBroadcastState) {
    if (currBroadcastState) {
      const arg = {
        index: getPreviewIndex(storeState),
        stitcherLocation: getStitcherLocation(storeState),
        url: getStreamUrl(storeState),
        width: getWidth(storeState),
        height: getHeight(storeState),
      };
      ipcRenderer.send(START_STREAM, arg);
    } else {
      ipcRenderer.send(STOP_STREAM);
    }
  }
};

export const requestFile = (path) => {
  ipcRenderer.send(REQUEST_FILE, {
    path,
  });
};

export const reportError = (msg) => {
  ipcRenderer.send(ERROR_CAUGHT, {
    msg,
  });
};

export const setupIPCHandler = (store) => {
  ipcRenderer.on(RECEIVE_FILE, (event, arg) => {
    store.dispatch(receiveVideo(arg.path));
    const fileName = arg.path.substring(arg.path.lastIndexOf('/') + 1);
    uploadVideo(store.dispatch, fileName, arg.data);
  });

  ipcRenderer.on(STOPPED_PROC, (event, arg) => {
    const videoPath = arg.outPath;
    store.dispatch(requestVideo(videoPath));
  });
};
