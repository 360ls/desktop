export const PREFERENCE_SAVED = 'PREFERENCE_SAVED';

export const savePreference = (indices, stitcherLoc, recordingLoc) => ({
  type: PREFERENCE_SAVED,
  cameraIndex: indices[0],
  sndCameraIndex: indices[1],
  thirdCameraIndex: indices[2],
  fourthCameraIndex: indices[3],
  stitcherLoc,
  recordingLoc,
});
