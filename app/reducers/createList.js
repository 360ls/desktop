import { RECEIVE_VIDEOS } from '../actions/videos';

const createList = (filter) => { // eslint-disable-line arrow-body-style
  return (state = [], action) => {
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
};

export default createList;

export const getIds = (state) => state;
