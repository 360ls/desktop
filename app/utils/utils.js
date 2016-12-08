import { dialog } from 'electron';

export const showErrDialog = (title, msg) => {
  dialog.showErrorBox(title, msg);
};

export const showMsgDialog = (msg) => {
  dialog.showMessageBox({
    buttons: [
      'ok',
    ],
    title: 'Error',
    message: msg,
  });
};
