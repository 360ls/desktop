import { normalize } from 'normalizr';
import * as api from '../api';
import * as schema from './schema';
import { getIsFetching } from '../reducers/videos';

export const SWITCH_VIDEO = 'SWITCH_VIDEO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const FETCH_VIDEOS_REQUEST = 'FETCH_VIDEOS_REQUEST';
export const FETCH_VIDEOS_SUCCESS = 'FETCH_VIDEOS_SUCCESS';
export const FETCH_VIDEOS_FAILURE = 'FETCH_VIDEOS_FAILURE';
export const TOGGLE_VIDEO_SUCCESS = 'TOGGLE_VIDEO_SUCCESS';

export const fetchVideos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: FETCH_VIDEOS_REQUEST,
    filter,
  });

  return api.fetchVideos(filter).then(
    response => {
      dispatch({
        type: FETCH_VIDEOS_SUCCESS,
        filter,
        response: normalize(response, schema.arrayOfVideos),
      });
    },
    error => {
      dispatch({
        type: FETCH_VIDEOS_FAILURE,
        filter,
        message: error.message || 'Something went wrong',
      });
    }
  );
};

export const switchVideo = (uri, id) => ({
  type: SWITCH_VIDEO,
  uri,
  id,
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export const switchVideoTo = (uri, id) =>
  switchVideo(uri, id);

export const toggleVideo = (id) => (dispatch) =>
  api.toggleVideo(id).then(response => {
    dispatch({
      type: TOGGLE_VIDEO_SUCCESS,
      response: normalize(response, schema.video),
    });
  });
