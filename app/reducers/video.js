import { combineReducers } from 'redux';
import {
  UPLOAD_VIDEO_REQUEST,
  UPLOAD_VIDEO_SUCCESS,
  UPLOAD_VIDEO_FAILURE,
} from '../actions/video';
import {
  REQUEST_FILE,
  RECEIVE_FILE,
  STARTED_CONVERSION,
  FINISHED_CONVERSION,
} from '../services/signals';

const liveState = {
  idle: 0,
  reading: 1,
  read: 2,
  uploading: 3,
  uploaded: 4,
  converting: 5,
  converted: 6,
};

const video = () => {
  const status = (state = liveState.idle, action) => {
    switch (action.type) {
      case STARTED_CONVERSION:
        return liveState.converting;
      case FINISHED_CONVERSION:
        return liveState.converted;
      case REQUEST_FILE:
        return liveState.reading;
      case RECEIVE_FILE:
        return liveState.read;
      case UPLOAD_VIDEO_REQUEST:
        return liveState.uploading;
      case UPLOAD_VIDEO_FAILURE:
      case UPLOAD_VIDEO_SUCCESS:
        return liveState.uploaded;
      default:
        return state;
    }
  };

  return combineReducers({
    status,
  });
};

export default video;

const getStatus = (state) =>
  state.video.status;

export const isIdle = (state) =>
  (getStatus(state) === liveState.idle);

export const isReading = (state) =>
  (getStatus(state) === liveState.reading);

export const isRead = (state) =>
  (getStatus(state) === liveState.read);

export const isUploading = (state) =>
  (getStatus(state) === liveState.uploading);

export const isUploaded = (state) =>
  (getStatus(state) === liveState.uploaded);

export const isConverting = (state) =>
  (getStatus(state) === liveState.converting);

export const isConverted = (state) =>
  (getStatus(state) === liveState.converted);
