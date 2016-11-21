import { combineReducers } from 'redux';
import { TOGGLE_STREAM, TOGGLE_PREVIEW } from '../actions/live';

const live = () => {
  const recording = (state = false, action) => {
    switch (action.type) {
      case TOGGLE_STREAM:
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

  return combineReducers({
    recording,
    preview,
  });
};

export default live;

export const isStreaming = (state) =>
  state.live.recording;

export const isPreviewing = (state) =>
  state.live.preview;
