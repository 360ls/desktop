import live from '../../app/reducers/live';
import { TOGGLE_STREAM } from '../../app/actions/live';

describe('reducers', () => {
  describe('live', () => {
    it('should return the initial state', () => {
      expect(live()(undefined, {
        type: 'unknown',
      })).toEqual({
        recording: false,
        broadcast: false,
        preview: false,
      });
    });

    it('should handle toggle stream from close to open', () => {
      expect(live()({
        recording: false,
      }, {
        type: TOGGLE_STREAM,
      })).toEqual({
        recording: true,
        broadcast: false,
        preview: false,
      });
    });

    it('should handle toggle stream from open to close', () => {
      expect(live()({
        recording: true,
      }, {
        type: TOGGLE_STREAM,
      })).toEqual({
        recording: false,
        broadcast: false,
        preview: false,
      });
    });
  });
});
