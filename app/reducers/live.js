import { combineReducers } from 'redux';
import { TOGGLE_STREAM } from '../actions/live';

const live = () => {
  const recording = (state = false, action) => {
    switch (action.type) {
      case TOGGLE_STREAM:
        return !state;
      default:
        return state;
    }
  }

  return combineReducers({
    recording,
  });
};

export default live;

export const isStreaming = (state) =>
  state.live.recording;
