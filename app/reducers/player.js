import { combineReducers } from 'redux';
import { SWITCH_VIDEO } from '../actions/videos';
import { getVideoById } from './videos';

const player = () => {
  const id = (state = null, action) => {
    switch (action.type) {
      case SWITCH_VIDEO:
        return action.id;
      default:
        return state;
    }
  };

  const uri = (state = null, action) => {
    switch (action.type) {
      case SWITCH_VIDEO:
        return action.uri;
      default:
        return state;
    }
  };

  return combineReducers({
    id,
    uri,
  });
};

export default player;

export const getVideo = (state) =>
  getVideoById(state, state.player.id);

export const getVideoURI = (state) =>
  state.player.uri;
