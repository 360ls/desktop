import player, { initialState } from '../../app/reducers/player';
import { SWITCH_VIDEO } from '../../app/actions/videos';

describe('reducers', () => {
  describe('player', () => {
    it('should return the initial state', () => {
      expect(player(undefined, {
        type: 'unknown',
      })).toEqual(initialState);
    });

    it('should handle switch in current video', () => {
      const uri = 'foo.mp4';
      expect(player(initialState, {
        type: SWITCH_VIDEO,
        uri,
      })).toEqual({
        uri,
      });
    });
  });
});
