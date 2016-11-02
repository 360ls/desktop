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
  return ids.map(id => fromById.getVideos(state.byId, id));
};
