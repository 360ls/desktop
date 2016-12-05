export const PREFERENCE_SAVED = 'PREFERENCE_SAVED';

export const savePreference = (
  cameraIndex, sndCameraIndex,
  previewIndex, stitcherLoc,
  recordingLoc, streamUrl,
  width, height
) => ({
  type: PREFERENCE_SAVED,
  cameraIndex,
  sndCameraIndex,
  previewIndex,
  stitcherLoc,
  recordingLoc,
  streamUrl,
  width,
  height,
});
