import byId from '../../app/reducers/byId';

const videos = {
  foo: 'bar',
};

describe('reducers', () => {
  describe('byId', () => {
    it('should return the initial state', () => {
      expect(byId(undefined, {
        type: 'unknown',
      })).toEqual({});
    });

    it('should handle response objects', () => {
      expect(byId(undefined, {
        response: {
          entities: {
            videos,
          },
        },
      })).toEqual(videos);
    });
  });
});
