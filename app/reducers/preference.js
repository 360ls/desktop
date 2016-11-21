import { combineReducers } from 'redux';
import { PREFERENCE_SAVED } from '../actions/preference';

const baseDir = '.360ls/';
const recordDir = '.360ls/recordings/';

const preference = () => {
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

  const previewIndex = (state = 0, action) => {
    switch (action.type) {
      case PREFERENCE_SAVED:
        return action.previewIndex;
      default:
        return state;
    }
  };

  return combineReducers({
    recordLocation,
    stitcherLocation,
    cameraIndex,
    sndCameraIndex,
    previewIndex,
  });
};

export default preference;

export const getRecordLocation = (state) =>
  state.preference.recordLocation;

export const getStitcherLocation = (state) =>
  state.preference.stitcherLocation;

export const getCameraIndex = (state) =>
  state.preference.cameraIndex;

export const getSndCameraIndex = (state) =>
  state.preference.sndCameraIndex;

export const getPreviewIndex = (state) =>
  state.preference.previewIndex;
