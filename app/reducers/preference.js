import { combineReducers } from 'redux';
import { PREFERENCE_SAVED } from '../actions/preference';

const baseDir = '.360ls/';
const recordDir = '.360ls/recordings/';
const defaultUrl = 'rtmp://54.227.214.22:1935/live/myStream';
const defaultWidth = 1280;
const defaultHeight = 720;
const defaultLocation = 'Chapel Hill, NC';

const preference = () => {
  const previewIndex = (state = 0, action) => {
    switch (action.type) {
      case PREFERENCE_SAVED:
        return action.previewIndex;
      default:
        return state;
    }
  };

  const cameraIndex = (state = 0, action) => {
    switch (action.type) {
      case PREFERENCE_SAVED:
        return action.cameraIndex;
      default:
        return state;
    }
  };

  const sndCameraIndex = (state = 1, action) => {
    switch (action.type) {
      case PREFERENCE_SAVED:
        return action.sndCameraIndex;
      default:
        return state;
    }
  };

  const recordLocation = (state = recordDir, action) => {
    switch (action.type) {
      case PREFERENCE_SAVED:
        return action.recordingLoc;
      default:
        return state;
    }
  };

  const stitcherLocation = (state = baseDir, action) => {
    switch (action.type) {
      case PREFERENCE_SAVED:
        return action.stitcherLoc;
      default:
        return state;
    }
  };

  const streamUrl = (state = defaultUrl, action) => {
    switch (action.type) {
      case PREFERENCE_SAVED:
        return action.streamUrl;
      default:
        return state;
    }
  };

  const width = (state = defaultWidth, action) => {
    switch (action.type) {
      case PREFERENCE_SAVED:
        return action.width;
      default:
        return state;
    }
  };

  const height = (state = defaultHeight, action) => {
    switch (action.type) {
      case PREFERENCE_SAVED:
        return action.height;
      default:
        return state;
    }
  };

  const location = (state = defaultLocation, action) => {
    switch (action.type) {
      case PREFERENCE_SAVED:
        return action.location;
      default:
        return state;
    }
  };

  return combineReducers({
    previewIndex,
    cameraIndex,
    sndCameraIndex,
    recordLocation,
    stitcherLocation,
    streamUrl,
    width,
    height,
    location,
  });
};

export default preference;

export const getPreviewIndex = (state) =>
  state.preference.previewIndex;

export const getCameraIndex = (state) =>
  state.preference.cameraIndex;

export const getSndCameraIndex = (state) =>
  state.preference.sndCameraIndex;

export const getRecordLocation = (state) =>
  state.preference.recordLocation;

export const getStitcherLocation = (state) =>
  state.preference.stitcherLocation;

export const getStreamUrl = (state) =>
  state.preference.streamUrl;

export const getWidth = (state) =>
  state.preference.width;

export const getHeight = (state) =>
  state.preference.height;

export const getLocation = (state) =>
  state.preference.location;
