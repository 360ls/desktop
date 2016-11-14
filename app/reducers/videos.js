import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
  All: createList('All'),
  Uploaded: createList('Uploaded'),
  Flagged: createList('Flagged'),
});

const videos = combineReducers({
  byId,
  listByFilter,
});

export default videos;

export const getVisibleVideos = (state, filter) => {
  const ids = fromList.getIds(state.videos.listByFilter[filter]);
  console.log(ids);
  return ids.map(id => fromById.getVideo(state.videos.byId, id));
};

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.videos.listByFilter[filter]);

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.videos.listByFilter[filter]);

export const getVideoById = (state, id) =>
  state.videos.byId[id];
