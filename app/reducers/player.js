import { SWITCH_VIDEO } from '../actions/videos';

const initialState = {
  uri: 'storage/local1.mp4',
};

export default function player(state = initialState, action) {
  switch (action.type) {
    case SWITCH_VIDEO:
      return Object.assign({}, state, {
        uri: action.uri,
      });
    default:
      return state;
  }
}
