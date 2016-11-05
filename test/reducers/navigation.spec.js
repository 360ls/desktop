import navigation from '../../app/reducers/navigation';
import { TOGGLE_NAV, CLOSE_NAV, CHANGE_NAV } from '../../app/actions/navigation';

describe('reducers', () => {
  describe('navigation', () => {
    it('should return the initial state', () => {
      expect(navigation()(undefined, {
        type: 'unknown',
      })).toEqual({
        isOpen: false,
      });
    });

    it('should handle change in opened state', () => {
      expect(navigation()({ isOpen: false }, {
        type: CHANGE_NAV,
        open: true,
      })).toEqual({
        isOpen: true,
      });
    });

    it('should handle change in opened state', () => {
      expect(navigation()({ isOpen: true }, {
        type: CHANGE_NAV,
        open: false,
      })).toEqual({
        isOpen: false,
      });
    });

    it('should handle navbar toggle', () => {
      expect(navigation()({ isOpen: false }, {
        type: TOGGLE_NAV,
      })).toEqual({
        isOpen: true,
      });
    });

    it('should handle navbar toggle', () => {
      expect(navigation()({ isOpen: true }, {
        type: TOGGLE_NAV,
      })).toEqual({
        isOpen: false,
      });
    });

    it('should handle navbar close', () => {
      expect(navigation()({ isOpen: true }, {
        type: CLOSE_NAV,
      })).toEqual({
        isOpen: false,
      });
    });

    it('should handle navbar close', () => {
      expect(navigation()({ isOpen: false }, {
        type: CLOSE_NAV,
      })).toEqual({
        isOpen: false,
      });
    });
  });
});
