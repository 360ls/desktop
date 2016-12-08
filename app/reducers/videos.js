import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';
import { SELECT_VIDEO, DELETE_VIDEO_SUCCESS } from '../actions/videos';

const listByFilter = combineReducers({
  All: createList('All'),
  Uploaded: createList('Uploaded'),
  Flagged: createList('Flagged'),
});

const selectedVideos = (state = [], action) => {
  switch (action.type) {
    case SELECT_VIDEO:
      return action.ids;
    case DELETE_VIDEO_SUCCESS:
      return [];
    default:
      return state;
  }
};

const videos = combineReducers({
  byId,
  listByFilter,
  selectedVideos,
});

export default videos;

export const getVisibleVideos = (state, filter) => {
  const ids = fromList.getIds(state.videos.listByFilter[filter]);
  return ids.map(id => fromById.getVideo(state.videos.byId, id));
};

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.videos.listByFilter[filter]);

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.videos.listByFilter[filter]);

export const getVideoById = (state, id) =>
  state.videos.byId[id];

export const getSelectedVideos = (state) =>
  state.videos.selectedVideos;
