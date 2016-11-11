import { ipcRenderer } from 'electron';
import { isStreaming } from '../reducers/live';

export const RECORD = 'RECORD';
export const STOP = 'STOP';

let currState = false;
export const handleChange = (store) => () => {
  let prevState = currState;
  currState = isStreaming(store.getState());

  if (prevState !== currState) {
    if (currState) {
      ipcRenderer.send(RECORD);
    } else {
      ipcRenderer.send(STOP);
    }
  }
};
