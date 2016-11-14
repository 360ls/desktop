import { ipcRenderer } from 'electron';
import { isStreaming } from '../reducers/live';
import { requestVideo, receiveVideo, uploadVideo } from '../actions/video';
import { getRecordLocation, getStitcherLocation } from '../reducers/preference';

export const RECORD = 'RECORD';
export const STOP = 'STOP';
export const REQUEST_FILE = 'REQUEST_FILE';
export const RECEIVE_FILE = 'RECEIVE_FILE';
export const STOPPED_PROC = 'STOPPED_PROC';
export const UPLOADED = 'UPLOADED';

let currState = false;
export const handleChange = (store) => () => {
  const prevState = currState;
  currState = isStreaming(store.getState());

  if (prevState !== currState) {
    if (currState) {
      const arg = {
        recordLocation: getRecordLocation(store.getState()),
        stitcherLocation: getStitcherLocation(store.getState()),
      };
      ipcRenderer.send(RECORD, arg);
    } else {
      ipcRenderer.send(STOP);
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
