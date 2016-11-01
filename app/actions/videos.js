export const SWITCH_VIDEO = 'SWITCH_VIDEO';

export function switchVideo(uri) {
  return {
    type: SWITCH_VIDEO,
    uri,
  };
}
