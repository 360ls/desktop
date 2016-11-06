import { combineReducers } from 'redux';
import { RECEIVE_VIDEOS } from '../actions/videos';

const createList = (filter) => { // eslint-disable-line arrow-body-style
  const ids = (state = [], action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case RECEIVE_VIDEOS:
        return action.response.map(video => video.id);
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (filter !== action.filter) {
      return state;
    }

    switch (action.type) {
      case 'REQUEST_VIDEOS':
        return true;
      case 'RECEIVE_VIDEOS':
        return false;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
  });
};

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
