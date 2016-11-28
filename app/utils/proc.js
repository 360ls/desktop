import { spawn } from 'child_process';
import path from 'path';

export const spawnProc = (cmd, args) => {
  let proc = null;
  switch (process.platform) {
    case 'darwin':
    case 'linux':
      proc = spawn(cmd, args);
      break;
    case 'win32':
      args.unshift(cmd);
      proc = spawn('python', args);
      break;
    default:
      console.error('unsupported platform');
  }
  return proc;
};

export const killProc = (childProc) => {
  if (childProc) {
    switch (process.platform) {
      case 'darwin':
      case 'linux':
        childProc.kill();
        break;
      case 'win32':
        spawn('taskkill', ['/pid', childProc.pid, '/f', '/t']);
        break;
      default:
        console.error(process.platform);
    }
  }
};

export const connect = (outProc, inProc) => {
  const outStream = outProc.stdout;
  const inStream = inProc.stdin;
  outStream.pipe(inStream);
};

export const getStreamArgs = (streamUrl) => {
  const ffmpegArgs = [
    '-y', '-f', 'rawvideo',
    '-s', '640x480', '-pix_fmt', 'bgr24', '-i', 'pipe:0', '-vcodec',
    'libx264', '-pix_fmt', 'uyvy422', '-r', '28', '-an', '-f', 'flv', streamUrl
  ];

  return ffmpegArgs;
};

export const getHomeDirectory = () =>
  process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];

export const getStitcherArgsForPreview = (previewIndex) => {
  const stitcherArgs = ['-m', 'app.stitcher.stitch', '-p', '-i', previewIndex];
  return stitcherArgs;
};

export const getStitcherArgsForStream = (streamIndex) => {
  const stitcherArgs = ['-m', 'app.stitcher.stitch', '-s', '-i', streamIndex, '--width', 640, '--height', 480];
  return stitcherArgs;
};

export const getStitcherArgsForRecording = (width, height, index, videoPath) => {
  const stitcherArgs = [
    '-m',
    'app.stitcher.stitch',
    '-f', videoPath,
    '-i', index,
    '--width', width,
    '--height', height,
    '-s',
  ];
  return stitcherArgs;
};

export const getStitcherCmd = (stitcherLocation) => {
  const stitcherProg = 'stitcher.py';
  const stitcherCmd = path.join(getHomeDirectory(), stitcherLocation, stitcherProg);

  return stitcherCmd;
};

export const getFFmpegCmd = () => {
  const ffmpegProg = 'ffmpeg';
  return ffmpegProg;
};

export const getConversionCmd = (sourcePath, convertedPath) => {
  const cmd = `ffmpeg -i ${sourcePath} ${convertedPath}`;
  return cmd;
};

export const getTargetExt = () => {
  const ext = '.avi';
  return ext;
};

export const getConvertedExt = () => {
  const ext = '.mp4';
  return ext;
};

export const getTargetPath = (recordLocation, id) => {
  const destDir = path.join(getHomeDirectory(), recordLocation);
  const videoName = id + getTargetExt();
  return path.join(destDir, videoName);
};

export const getConvertedTargetPath = (recordLocation, id) => {
  const destDir = path.join(getHomeDirectory(), recordLocation);
  const videoName = id + getConvertedExt();
  return path.join(destDir, videoName);
};
