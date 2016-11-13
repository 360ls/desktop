import { combineReducers } from 'redux';
import {
   UPLOAD_VIDEO_REQUEST,
   UPLOAD_VIDEO_SUCCESS,
   UPLOAD_VIDEO_FAILURE,
  } from '../actions/video';

const video = () => {
  const uploading = (state = false, action) => {
    switch (action.type) {
      case UPLOAD_VIDEO_REQUEST:
        return true;
      case UPLOAD_VIDEO_FAILURE:
      case UPLOAD_VIDEO_SUCCESS:
        return false;
      default:
        return state;
    }
  };

  return combineReducers({
    uploading,
  });
};

export default video;

export const isUploading = (state) =>
  state.video.uploading;
