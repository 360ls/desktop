import * as actions from '../../app/actions/preference';

describe('actions', () => {
  it('should create an an action to save preference', () => {
    const expectedAction = {
      type: actions.PREFERENCE_SAVED,
      cameraIndex: 0,
      sndCameraIndex: 0,
      previewIndex: 0,
      stitcherLoc: '',
      recordingLoc: '',
      streamUrl: '',
      width: 0,
      height: 0,
      location: '',
    };
    expect(actions.savePreference(
      0, 0, 0, '', '', '', 0, 0, ''
    )).toEqual(expectedAction);
  });
});
