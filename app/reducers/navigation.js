import { TOGGLE_NAV, OPEN_NAV, CHANGE_NAV } from '../actions/navigation';

const initialState = {
  open: false,
};

export default function navigation(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAV:
      return Object.assign({}, state, {
        open: !state.open,
      });
    case OPEN_NAV:
      return Object.assign({}, state, {
        open: true,
      });
    case CHANGE_NAV:
      return Object.assign({}, state, {
        open: action.open,
      });
    default:
      return state;
  }
}
