import player from '../../app/reducers/player';
import { SWITCH_VIDEO } from '../../app/actions/videos';

describe('reducers', () => {
  describe('player', () => {
    it('should return the initial state', () => {
      expect(player()(undefined, {
        type: 'unknown',
      })).toEqual({
        uri: null,
        id: null,
      });
    });

    it('should handle switch in current video', () => {
      const uri = 'foo.mp4';
      const id = 'foo';
      expect(player()(undefined, {
        type: SWITCH_VIDEO,
        uri,
        id,
      })).toEqual({
        uri,
        id,
      });
    });
  });
});
