import { combineReducers } from 'redux';
import { SWITCH_VIDEO } from '../actions/videos';
import { getVideoById } from './videos';

const player = () => {
  const uri = (state = null, action) => {
    switch (action.type) {
      case SWITCH_VIDEO:
        return action.uri;
      default:
        return state;
    }
  };

  const id = (state = null, action) => {
    switch (action.type) {
      case SWITCH_VIDEO:
        return action.id;
      default:
        return state;
    }
  };

  return combineReducers({
    uri,
    id,
  });
};

export default player;

export const getVideoURI = (state) =>
  state.player.uri;

export const getVideo = (state) =>
  getVideoById(state, state.player.id);
