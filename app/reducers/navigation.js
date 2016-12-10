import { combineReducers } from 'redux';
import {
  CHANGE_NAV,
  CLOSE_NAV,
  OPEN_NAV,
  TOGGLE_NAV,
} from '../actions/navigation';

const createNavigation = () => {
  const isOpen = (state = false, action) => {
    switch (action.type) {
      case TOGGLE_NAV:
        return !state;
      case OPEN_NAV:
        return true;
      case CHANGE_NAV:
        return action.open;
      case CLOSE_NAV:
        return false;
      default:
        return state;
    }
  };

  return combineReducers({
    isOpen,
  });
};

export default createNavigation;

export const getNavStatus = (state) =>
  state.navigation.isOpen;

export const getSelectedIndex = (state) =>
  state.navigation.index;
