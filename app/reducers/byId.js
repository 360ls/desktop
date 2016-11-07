const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.videos,
    };
  }

  return state;
};

export default byId;

export const getVideo = (state, id) => state[id];
