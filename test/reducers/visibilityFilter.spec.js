import visibilityFilter from '../../app/reducers/visibilityFilter';
import { SET_VISIBILITY_FILTER } from '../../app/actions/videos';

describe('reducers', () => {
  describe('visibilityFilter', () => {
    it('should return the initial state', () => {
      expect(visibilityFilter(undefined, {
        type: 'unknown',
      })).toEqual('All');
    });

    it('should handle filter change', () => {
      const filter = 'Flagged';
      expect(visibilityFilter(undefined, {
        type: SET_VISIBILITY_FILTER,
        filter,
      })).toEqual(filter);
    });
  });
});
