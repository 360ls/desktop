import * as actions from '../../app/actions/videos';

describe('actions', () => {
  it('should create an an action to switch the video', () => {
    const uri = 'video.mp4';
    const expectedAction = {
      type: actions.SWITCH_VIDEO,
      uri,
    };
    expect(actions.switchVideo(uri)).toEqual(expectedAction);
  });

  it('should create an action to set the visibility filter', () => {
    const filter = 'Flagged';
    const expectedAction = {
      type: actions.SET_VISIBILITY_FILTER,
      filter,
    };
    expect(actions.setVisibilityFilter(filter)).toEqual(expectedAction);
  });
});
