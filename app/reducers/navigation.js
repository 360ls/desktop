import { TOGGLE_NAV } from '../actions/navigation';

const initialState = {
  open: false,
};

export default function navigation(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAV:
      return Object.assign({}, state, {
        open: !state.open,
      });
    default:
      return state;
  }
}
