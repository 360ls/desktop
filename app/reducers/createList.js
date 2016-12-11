import { combineReducers } from 'redux';

const createList = (filter) => { // eslint-disable-line arrow-body-style
  const handleToggle = (state, action) => {
    const { result: toggledId, entities } = action.response;
    const { flagged } = entities.videos[toggledId];
    const shouldRemove = (
      (!flagged && filter === 'flagged')
    );
    return shouldRemove ?
      state.filter(id => id !== toggledId) :
      state;
  };

  const ids = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_VIDEOS_SUCCESS':
        return filter === action.filter ?
          action.response.result :
          state;
      case 'TOGGLE_VIDEO_SUCCESS':
        return handleToggle(state, action);
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (filter !== action.filter) {
      return state;
    }

    switch (action.type) {
      case 'FETCH_VIDEOS_REQUEST':
        return true;
      case 'FETCH_VIDEOS_SUCCESS':
      case 'FETCH_VIDEOS_FAILURE':
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    if (filter !== action.filter) {
      return state;
    }

    switch (action.type) {
      case 'FETCH_VIDEOS_FAILURE':
        return action.message;
      case 'FETCH_VIDEOS_REQUEST':
      case 'FETCH_VIDEOS_SUCCESS':
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage,
  });
};

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
