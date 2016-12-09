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
export const ADD_VIDEO_REQUEST = 'ADD_VIDEO_REQUEST';
export const ADD_VIDEO_SUCCESS = 'ADD_VIDEO_SUCCESS';
export const ADD_VIDEO_FAILURE = 'ADD_VIDEO_FAILURE';
export const DELETE_VIDEO_REQUEST = 'DELETE_VIDEO_REQUEST';
export const DELETE_VIDEO_SUCCESS = 'DELETE_VIDEO_SUCCESS';
export const DELETE_VIDEO_FAILURE = 'DELETE_VIDEO_FAILURE';
export const SELECT_VIDEO = 'SELECT_VIDEO';

export const selectVideo = (ids) => ({
  type: SELECT_VIDEO,
  ids,
});

export const deleteVideos = (videos) => (dispatch, getState) => {
  dispatch({
    type: DELETE_VIDEO_REQUEST,
  });

  const ids = videos.map(video => video.id);
  const uris = videos.map(video => video.uri);

  return api.removeVideos(ids)
    .then(() => api.deleteVideos(uris))
    .then(() => {
      dispatch({
        type: DELETE_VIDEO_SUCCESS,
        ids,
      });

      return fetchVideos('All')(dispatch, getState);
    });
};

export const removeVideos = (ids) => (dispatch, getState) => {
  dispatch({
    type: DELETE_VIDEO_REQUEST,
  });

  return api.removeVideos(ids).then(() => {
    dispatch({
      type: DELETE_VIDEO_SUCCESS,
      ids,
    });

    return fetchVideos('All')(dispatch, getState);
  });
};

export const addVideo = (video) => (dispatch) => {
  dispatch({
    type: ADD_VIDEO_REQUEST,
  });

  return api.addVideoEntry(video).then(
    response => {
      dispatch({
        type: ADD_VIDEO_SUCCESS,
        response: normalize(response, schema.video),
      });

      return response;
    });
};

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

      return response;
    },
    error => {
      if (error.message === 'Cannot convert undefined or null to object') {
        const response = [];
        dispatch({
          type: FETCH_VIDEOS_SUCCESS,
          filter,
          response: normalize(response, schema.arrayOfVideos),
        });

        return response;
      }

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

export const toggleVideo = (video) => (dispatch) =>
  api.toggleVideo(video).then(response => {
    dispatch({
      type: TOGGLE_VIDEO_SUCCESS,
      response: normalize(response, schema.video),
    });

    return response;
  });
