import { dialog } from 'electron';

export const showErrDialog = (msg) => {
  const dialogTitle = 'Error';
  dialog.showErrorBox(dialogTitle, msg);
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
