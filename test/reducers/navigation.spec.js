import navigation from '../../app/reducers/navigation';
import { TOGGLE_NAV, CLOSE_NAV, CHANGE_NAV } from '../../app/actions/navigation';

describe('reducers', () => {
  describe('navigation', () => {
    it('should return the initial state', () => {
      expect(navigation(undefined, {
        type: 'unknown',
      })).toEqual({
        open: false,
      });
    });

    it('should handle change in opened state', () => {
      expect(navigation({ open: false }, {
        type: CHANGE_NAV,
        open: true,
      })).toEqual({
        open: true,
      });
    });

    it('should handle change in opened state', () => {
      expect(navigation({ open: true }, {
        type: CHANGE_NAV,
        open: false,
      })).toEqual({
        open: false,
      });
    });

    it('should handle navbar toggle', () => {
      expect(navigation({ open: false }, {
        type: TOGGLE_NAV,
      })).toEqual({
        open: true,
      });
    });

    it('should handle navbar toggle', () => {
      expect(navigation({ open: true }, {
        type: TOGGLE_NAV,
      })).toEqual({
        open: false,
      });
    });

    it('should handle navbar close', () => {
      expect(navigation({ open: true }, {
        type: CLOSE_NAV,
      })).toEqual({
        open: false,
      });
    });

    it('should handle navbar close', () => {
      expect(navigation({ open: false }, {
        type: CLOSE_NAV,
      })).toEqual({
        open: false,
      });
    });
  });
});
