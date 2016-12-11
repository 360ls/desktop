import { combineReducers } from 'redux';
import {
  TOGGLE_BROADCAST,
  TOGGLE_PREVIEW,
  TOGGLE_STREAM,
} from '../actions/live';

const live = () => {
  const broadcast = (state = false, action) => {
    switch (action.type) {
      case TOGGLE_BROADCAST:
        return !state;
      default:
        return state;
    }
  };

  const preview = (state = false, action) => {
    switch (action.type) {
      case TOGGLE_PREVIEW:
        return !state;
      default:
        return state;
    }
  };

  const recording = (state = false, action) => {
    switch (action.type) {
      case TOGGLE_STREAM:
        return !state;
      default:
        return state;
    }
  };

  return combineReducers({
    broadcast,
    preview,
    recording,
  });
};

export default live;

export const isBroadcasting = (state) =>
  state.live.broadcast;

export const isPreviewing = (state) =>
  state.live.preview;

export const isStreaming = (state) =>
  state.live.recording;
