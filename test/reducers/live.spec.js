import live from '../../app/reducers/live';
import {
  TOGGLE_BROADCAST,
  TOGGLE_PREVIEW,
  TOGGLE_STREAM,
} from '../../app/actions/live';

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

    it('should handle toggle preview from close to open', () => {
      expect(live()({
        preview: false,
      }, {
        type: TOGGLE_PREVIEW,
      })).toEqual({
        recording: false,
        broadcast: false,
        preview: true,
      });
    });

    it('should handle toggle preview from open to close', () => {
      expect(live()({
        preview: true,
      }, {
        type: TOGGLE_PREVIEW,
      })).toEqual({
        recording: false,
        broadcast: false,
        preview: false,
      });
    });

    it('should handle toggle broadcast from close to open', () => {
      expect(live()({
        broadcast: false,
      }, {
        type: TOGGLE_BROADCAST,
      })).toEqual({
        recording: false,
        broadcast: true,
        preview: false,
      });
    });

    it('should handle toggle broadcast from open to close', () => {
      expect(live()({
        broadcast: true,
      }, {
        type: TOGGLE_BROADCAST,
      })).toEqual({
        recording: false,
        broadcast: false,
        preview: false,
      });
    });
  });
});
