import * as actions from '../../app/actions/video';
import * as signals from '../../app/services/signals';

describe('actions', () => {
  it('should create an an action to start conversion', () => {
    const expectedAction = {
      type: signals.STARTED_CONVERSION,
    };
    expect(actions.startConversion()).toEqual(expectedAction);
  });

  it('should create an an action to stop conversion', () => {
    const expectedAction = {
      type: signals.FINISHED_CONVERSION,
    };
    expect(actions.finishConversion()).toEqual(expectedAction);
  });

  it('should create an an action to receive video', () => {
    const expectedAction = {
      type: signals.RECEIVE_FILE,
      video: {},
    };
    expect(actions.receiveVideo({})).toEqual(expectedAction);
  });
});
