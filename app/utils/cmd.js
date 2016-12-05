import path from 'path';

const basePath = '.360ls';
const stitcherScript = 'stitcher.py';
const stitcherModule = 'app.stitcher.stitch';

export const getStitcherPrefix = (stitcherPath) => {
  if (path.dirname(stitcherPath) === basePath) {
    return [
      stitcherScript
    ];
  }

  return [
    '-m',
    stitcherModule
  ];
};

const getCmd = (prefix, args) =>
  prefix.concat(args);

export const getHomeDirectory = () => {
  const homeDir = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
  const defaultHomeDir = '/home/ubuntu/';
  return (homeDir || defaultHomeDir);
};

export const getStitcherArgsForPreview = (stitcherPath, previewIndex, width, height) => {
  const argPrefix = getStitcherPrefix(stitcherPath);
  const argSuffix = [
    '-p',
    '-i', previewIndex,
    '--width', width,
    '--height', height,
  ];

  return getCmd(argPrefix, argSuffix);
};

export const getStitcherArgsForStream = (
  stitcherPath, streamIndex, streamUrl, width, height) => {
  const argPrefix = getStitcherPrefix(stitcherPath);
  const argSuffix = [
    '-s',
    '--url', streamUrl,
    '-i', streamIndex,
    '--width', width,
    '--height', height
  ];

  return getCmd(argPrefix, argSuffix);
};

export const getStitcherArgsForRecording = (
  stitcherPath, width, height, index, videoPath, streamUrl) => {
  const argPrefix = getStitcherPrefix(stitcherPath);
  const argSuffix = [
    '-f', videoPath,
    '-i', index,
    '--width', width,
    '--height', height,
    '-s',
    '--url', streamUrl
  ];

  return getCmd(argPrefix, argSuffix);
};

const getFFmpegCmd = () => {
  const ffmpegProg = 'ffmpeg';
  return ffmpegProg;
};

export const getConversionCmd = (sourcePath, convertedPath) => {
  const ffmpegCmd = getFFmpegCmd();
  const cmd = `${ffmpegCmd} -i ${sourcePath} ${convertedPath}`;
  return cmd;
};

const getTargetExt = () => {
  const ext = '.avi';
  return ext;
};

const getConvertedExt = () => {
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
