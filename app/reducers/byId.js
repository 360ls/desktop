import { RECEIVE_VIDEOS } from '../actions/videos';

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_VIDEOS: // eslint-disable-line no-case-declarations
      const nextState = { ...state };
      action.response.forEach(video => {
        nextState[video.id] = video;
      });
      return nextState;
    default:
      return state;
  }
};

export default byId;

export const getVideo = (state, id) => state[id];
