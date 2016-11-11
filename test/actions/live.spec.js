import * as actions from '../../app/actions/live';

describe('actions', () => {
  it('should create an an action to toggle stream', () => {
    const expectedAction = {
      type: actions.TOGGLE_STREAM,
    };
    expect(actions.toggleStream()).toEqual(expectedAction);
  });
});
