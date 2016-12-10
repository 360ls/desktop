import * as actions from '../../app/actions/live';

describe('actions', () => {
  it('should create an an action to toggle stream', () => {
    const expectedAction = {
      type: actions.TOGGLE_STREAM,
    };
    expect(actions.toggleStream()).toEqual(expectedAction);
  });

  it('should create an action to toggle preview', () => {
    const expectedAction = {
      type: actions.TOGGLE_PREVIEW,
    };
    expect(actions.togglePreview()).toEqual(expectedAction);
  });

  it('should create an action to toggle broadcast', () => {
    const expectedAction = {
      type: actions.TOGGLE_BROADCAST,
    };
    expect(actions.toggleBroadcast()).toEqual(expectedAction);
  });
});
