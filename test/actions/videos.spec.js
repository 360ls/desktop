import * as actions from '../../app/actions/videos';

describe('actions', () => {
  it('should create an an action to switch the video', () => {
    const uri = 'video.mp4';
    const id = 'foo';
    const expectedAction = {
      type: actions.SWITCH_VIDEO,
      uri,
      id,
    };
    expect(actions.switchVideo(uri, id)).toEqual(expectedAction);
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
