import * as api from '../api';
import { getIsFetching } from '../reducers/videos';

export const SWITCH_VIDEO = 'SWITCH_VIDEO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';

const requestVideos = (filter) => ({
  type: 'REQUEST_VIDEOS',
  filter,
});

const receiveVideos = (filter, response) => ({
  type: RECEIVE_VIDEOS,
  filter,
  response,
});

export const fetchVideos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch(requestVideos(filter));

  return api.fetchVideos(filter).then(response => {
    dispatch(receiveVideos(filter, response));
  });
};

export const switchVideo = uri => ({
  type: SWITCH_VIDEO,
  uri,
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export const switchVideoTo = (uri) =>
  switchVideo(uri);
