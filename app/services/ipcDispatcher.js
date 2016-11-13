import { ipcRenderer } from 'electron';
import { isStreaming } from '../reducers/live';

export const RECORD = 'RECORD';
export const STOP = 'STOP';
export const READ_FILE = 'READ_FILE';

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
