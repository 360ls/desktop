export const PREFERENCE_SAVED = 'PREFERENCE_SAVED';

export const savePreference = (cameraIndex, stitcherLoc, recordingLoc) => ({
  type: PREFERENCE_SAVED,
  cameraIndex,
  stitcherLoc,
  recordingLoc,
});
