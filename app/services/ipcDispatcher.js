import { ipcRenderer } from 'electron';
import { isStreaming } from '../reducers/live';
import { receiveVideo } from '../actions/video';

export const RECORD = 'RECORD';
export const STOP = 'STOP';
export const REQUEST_FILE = 'REQUEST_FILE';
export const RECEIVE_FILE = 'RECEIVE_FILE';

let currState = false;
export const handleChange = (store) => () => {
  const prevState = currState;
  currState = isStreaming(store.getState());

  if (prevState !== currState) {
    if (currState) {
      ipcRenderer.send(RECORD);
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

export const setupIPCHandler = () => {
  ipcRenderer.on(RECEIVE_FILE, (event, arg) => {
    receiveVideo(arg);
  });
};
