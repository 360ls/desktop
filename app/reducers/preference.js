import { combineReducers } from 'redux';

const baseDir = '/Users/dong/.360ls/';
const recordDir = '/Users/dong/.360ls/recordings/';

const preference = () => {
  const recordLocation = (state = recordDir, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  const stitcherLocation = (state = baseDir, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  return combineReducers({
    recordLocation,
    stitcherLocation,
  });
};

export default preference;

export const getRecordLocation = (state) =>
  state.preference.recordLocation;

export const getStitcherLocation = (state) =>
  state.preference.stitcherLocation;
