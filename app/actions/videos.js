import * as api from '../api';
import { getIsFetching } from '../reducers/videos';

export const SWITCH_VIDEO = 'SWITCH_VIDEO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';

export const fetchVideos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_VIDEOS_REQUEST',
    filter,
  });

  return api.fetchVideos(filter).then(
    response => {
      dispatch({
        type: 'FETCH_VIDEOS_SUCCESS',
        filter,
        response,
      });
    },
    error => {
      dispatch({
        type: 'FETCH_VIDEOS_FAILURE',
        filter,
        message: error.message || 'Something went wrong',
      });
    }
  );
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
