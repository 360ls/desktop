import preference from '../../app/reducers/preference';
import { PREFERENCE_SAVED } from '../../app/actions/preference';

const baseDir = '.360ls/';
const recordDir = '.360ls/recordings/';
const defaultUrl = 'rtmp://54.227.214.22:1935/live/myStream';
const defaultWidth = 1280;
const defaultHeight = 720;
const defaultLocation = 'Chapel Hill, NC';

describe('reducers', () => {
  describe('preference', () => {
    it('should return the initial state', () => {
      expect(preference()(undefined, {
        type: 'unknown',
      })).toEqual({
        previewIndex: 0,
        cameraIndex: 0,
        sndCameraIndex: 1,
        recordLocation: recordDir,
        stitcherLocation: baseDir,
        streamUrl: defaultUrl,
        width: defaultWidth,
        height: defaultHeight,
        location: defaultLocation,
      });
    });

    it('should handle preference save', () => {
      expect(preference()(undefined, {
        type: PREFERENCE_SAVED,
        previewIndex: 1,
        cameraIndex: 2,
        sndCameraIndex: 3,
        recordingLoc: '/recordings',
        stitcherLoc: '/stitcher',
        streamUrl: '/stream',
        width: 640,
        height: 480,
        location: 'foo',
      })).toEqual({
        previewIndex: 1,
        cameraIndex: 2,
        sndCameraIndex: 3,
        recordLocation: '/recordings',
        stitcherLocation: '/stitcher',
        streamUrl: '/stream',
        width: 640,
        height: 480,
        location: 'foo',
      });
    });
  });
});
