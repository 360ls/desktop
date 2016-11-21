import { ipcRenderer } from 'electron';
import { isStreaming, isPreviewing } from '../reducers/live';
import { requestVideo, receiveVideo, uploadVideo } from '../actions/video';
import {
  getRecordLocation,
  getStitcherLocation,
  getCameraIndex,
  getPreviewIndex,
} from '../reducers/preference';

export const RECORD = 'RECORD';
export const STOP = 'STOP';
export const REQUEST_FILE = 'REQUEST_FILE';
export const RECEIVE_FILE = 'RECEIVE_FILE';
export const STOPPED_PROC = 'STOPPED_PROC';
export const UPLOADED = 'UPLOADED';
export const START_PREVIEW = 'START_PREVIEW';
export const STOP_PREVIEW = 'STOP_PREVIEW';
export const STOPPED_PREVIEW = 'STOPPED_PREVIEW';

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
      };
      ipcRenderer.send(START_PREVIEW, arg);
    } else {
      ipcRenderer.send(STOP_PREVIEW);
    }
  }
};

export const requestFile = (path) => {
  ipcRenderer.send(REQUEST_FILE, {
    path,
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
    const videoId = arg.id;
    store.dispatch(requestVideo(videoPath));
  });
};
