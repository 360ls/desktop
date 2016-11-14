import { v4 } from 'uuid';
import * as api from '../api';
import {
   REQUEST_FILE,
   RECEIVE_FILE,
   requestFile } from '../services/ipcDispatcher';
import { ADD_VIDEO_REQUEST, ADD_VIDEO_SUCCESS } from './videos';

export const UPLOAD_VIDEO_REQUEST = 'UPLOAD_VIDEO_REQUEST';
export const UPLOAD_VIDEO_SUCCESS = 'UPLOAD_VIDEO_SUCCESS';
export const UPLOAD_VIDEO_FAILURE = 'UPLOAD_VIDEO_FAILURE';

export const requestVideo = (videoPath) => {
  requestFile(videoPath);
  return ({
    type: REQUEST_FILE,
  });
};

export const receiveVideo = (video) => ({
  type: RECEIVE_FILE,
  video,
});

export const uploadVideo = (dispatch, fileName, data) => {
  dispatch({
    type: UPLOAD_VIDEO_REQUEST,
  });

  return api.uploadVideo(fileName, data)
    .then(() => api.getSharedLink(fileName))
    .then(res => {
      dispatch({
        type: UPLOAD_VIDEO_SUCCESS,
        link: res.url,
      });
      return res.url;
    })
    .then(url => {
      dispatch({
        type: ADD_VIDEO_REQUEST,
      });

      const video = {
        id: v4(),
        name: 'Foo',
        location: 'Chapel Hill, NC',
        uploaded: true,
        flagged: false,
        uri: url,
        date: '11/13/2016',
      };

      return api.addVideoEntry(video);
    })
    .then(response => {
      dispatch({
        type: ADD_VIDEO_SUCCESS,
      });
    });
};
