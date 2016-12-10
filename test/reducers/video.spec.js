import player, { liveState } from '../../app/reducers/video';
import {
  UPLOAD_VIDEO_REQUEST,
  UPLOAD_VIDEO_SUCCESS,
  UPLOAD_VIDEO_FAILURE,
} from '../../app/actions/video';
import {
  REQUEST_FILE,
  RECEIVE_FILE,
  STARTED_CONVERSION,
  FINISHED_CONVERSION,
} from '../../app/services/signals';

describe('reducers', () => {
  describe('video', () => {
    it('should return the initial state', () => {
      expect(player()(undefined, {
        type: 'unknown',
      })).toEqual({
        status: liveState.idle,
      });
    });

    it('should handle conversion start', () => {
      expect(player()(undefined, {
        type: STARTED_CONVERSION,
      })).toEqual({
        status: liveState.converting,
      });
    });

    it('should handle conversion finish', () => {
      expect(player()(undefined, {
        type: FINISHED_CONVERSION,
      })).toEqual({
        status: liveState.converted,
      });
    });

    it('should handle read request', () => {
      expect(player()(undefined, {
        type: REQUEST_FILE,
      })).toEqual({
        status: liveState.reading,
      });
    });

    it('should handle receive request', () => {
      expect(player()(undefined, {
        type: RECEIVE_FILE,
      })).toEqual({
        status: liveState.read,
      });
    });

    it('should handle upload request', () => {
      expect(player()(undefined, {
        type: UPLOAD_VIDEO_REQUEST,
      })).toEqual({
        status: liveState.uploading,
      });
    });

    it('should handle upload success', () => {
      expect(player()(undefined, {
        type: UPLOAD_VIDEO_SUCCESS,
      })).toEqual({
        status: liveState.uploaded,
      });
    });

    it('should handle upload failure', () => {
      expect(player()(undefined, {
        type: UPLOAD_VIDEO_FAILURE,
      })).toEqual({
        status: liveState.uploaded,
      });
    });
  });
});
