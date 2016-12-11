import createList from '../../app/reducers/createList';

const filter = 'All';
const flaggedFilter = 'Flagged';
const videos = ['foo', 'bar'];

describe('reducers', () => {
  describe('createList', () => {
    it('should return the initial state', () => {
      expect(createList(filter)(undefined, {
        type: 'unknown',
      })).toEqual({
        ids: [],
        isFetching: false,
        errorMessage: null,
      });
    });

    it('should handle fetch success if filter matches', () => {
      expect(createList(filter)(undefined, {
        type: 'FETCH_VIDEOS_SUCCESS',
        filter,
        response: {
          result: videos,
        },
      })).toEqual({
        ids: videos,
        isFetching: false,
        errorMessage: null,
      });
    });

    it('should handle fetch success if filter does not match', () => {
      expect(createList(filter)(undefined, {
        type: 'FETCH_VIDEOS_SUCCESS',
        filter: flaggedFilter,
        response: {
          result: videos,
        },
      })).toEqual({
        ids: [],
        isFetching: false,
        errorMessage: null,
      });
    });

    it('should handle fetch request if filter matches', () => {
      expect(createList(filter)(undefined, {
        type: 'FETCH_VIDEOS_REQUEST',
        filter,
      })).toEqual({
        ids: [],
        isFetching: true,
        errorMessage: null,
      });
    });

    it('should handle fetch request if filter does not match', () => {
      expect(createList(filter)(undefined, {
        type: 'FETCH_VIDEOS_REQUEST',
        filter: flaggedFilter,
      })).toEqual({
        ids: [],
        isFetching: false,
        errorMessage: null,
      });
    });

    it('should handle fetch success if filter does not match', () => {
      expect(createList(filter)(undefined, {
        type: 'FETCH_VIDEOS_SUCCESS',
        filter: flaggedFilter,
      })).toEqual({
        ids: [],
        isFetching: false,
        errorMessage: null,
      });
    });

    it('should handle fetch failure', () => {
      expect(createList(filter)(undefined, {
        type: 'FETCH_VIDEOS_FAILURE',
        filter,
        message: 'foo',
      })).toEqual({
        ids: [],
        isFetching: false,
        errorMessage: 'foo',
      });
    });
  });
});
