import createList from '../../app/reducers/createList';

const filter = 'All';

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
  });
});
