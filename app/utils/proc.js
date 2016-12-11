/* eslint-disable no-console */

import { spawn } from 'child_process';
import path from 'path';
import { getHomeDirectory } from './cmd';

export const changeToDir = (targetDir) => {
  process.chdir(path.join(getHomeDirectory(), targetDir));
};

export const spawnProc = (cmd, args) => {
  let proc = null;
  switch (process.platform) {
    case 'darwin':
    case 'linux':
      proc = spawn(cmd, args);
      break;
    default:
      console.error('unsupported platform');
  }
  return proc;
};

export const spawnPythonProc = (args) => {
  const pythonProg = 'python';
  return spawnProc(pythonProg, args);
};

export const killProc = (childProc) => {
  if (childProc) {
    switch (process.platform) {
      case 'darwin':
      case 'linux':
        childProc.kill();
        break;
      default:
        console.error(process.platform);
    }
  }
};
