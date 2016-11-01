export const SWITCH_VIDEO = 'SWITCH_VIDEO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export function switchVideo(uri) {
  return {
    type: SWITCH_VIDEO,
    uri,
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
}
