import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
  all: createList('All'),
  uploaded: createList('Uploaded'),
  flagged: createList('Flagged'),
});

const videos = combineReducers({
  byId,
  listByFilter,
});

export default videos;

export const getVisibleVideos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getVideos(state.byId, id));
};
