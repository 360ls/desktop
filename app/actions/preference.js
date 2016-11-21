export const PREFERENCE_SAVED = 'PREFERENCE_SAVED';

export const savePreference = (cameraIndex, sndCameraIndex, previewIndex, stitcherLoc, recordingLoc) => ({
  type: PREFERENCE_SAVED,
  cameraIndex,
  sndCameraIndex,
  previewIndex,
  stitcherLoc,
  recordingLoc,
});
