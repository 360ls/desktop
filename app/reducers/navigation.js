import { combineReducers } from 'redux';
import { TOGGLE_NAV, OPEN_NAV, CLOSE_NAV, CHANGE_NAV } from '../actions/navigation';

const navigation = () => {
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

export default navigation;

export const getNavStatus = (state) =>
  state.isOpen;
