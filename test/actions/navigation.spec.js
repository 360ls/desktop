import * as actions from '../../app/actions/navigation';

describe('actions', () => {
  it('should create an an action to toggle navbar', () => {
    const expectedAction = {
      type: actions.TOGGLE_NAV,
    };
    expect(actions.toggle()).toEqual(expectedAction);
  });

  it('should create an action to close navbar', () => {
    const expectedAction = {
      type: actions.CLOSE_NAV,
    };
    expect(actions.close()).toEqual(expectedAction);
  });

  it('should create an action to set navbar open state', () => {
    const isOpen = false;
    const expectedAction = {
      type: actions.CHANGE_NAV,
      open: false,
    };
    expect(actions.change(isOpen)).toEqual(expectedAction);
  });
});
