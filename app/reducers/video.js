import { combineReducers } from 'redux';
import {
   UPLOAD_VIDEO_REQUEST,
   UPLOAD_VIDEO_SUCCESS,
   UPLOAD_VIDEO_FAILURE,
  } from '../actions/video';
import { REQUEST_VIDEO, RECEIVE_VIDEO } from '../services/ipcDispatcher';

const video = () => {
  const uploading = (state = false, action) => {
    switch (action.type) {
      case REQUEST_VIDEO:
      case UPLOAD_VIDEO_REQUEST:
        return true;
      case UPLOAD_VIDEO_FAILURE:
      case UPLOAD_VIDEO_SUCCESS:
        return false;
      default:
        return state;
    }
  };

  const isReading = (state = false, action) => {
    switch (action.type) {
      case REQUEST_VIDEO:
        return true;
      case RECEIVE_VIDEO:
        return false;
      default:
        return state;
    }
  };

  return combineReducers({
    uploading,
    isReading,
  });
};

export default video;

export const isUploading = (state) =>
  state.video.uploading;

export const isReading = (state) =>
  state.video.isReading;
