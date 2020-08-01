const respectReducer = (state, action) => {
  switch (action.type) {
    case 'RESPECT_WORKOUT':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          workout: {
            ...state[action.id].workout,
            respected: true,
            respectsCount: state[action.id].workout.respectsCount + 1,
          },
        },
      };
    case 'UNRESPECT_WORKOUT':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          workout: {
            ...state[action.id].workout,
            respected: false,
            respectsCount: state[action.id].workout.respectsCount - 1,
          },
        },
      };
    default:
      return state;
  }
};

const feedReducer = (state = { feed: {}, loading: true }, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, feed: action.payload };
    case 'LOAD_USERS':
      return { ...state, loading: true };
    case 'FINISHED_LOADING':
      return { ...state, loading: false };
    case 'RESPECT_WORKOUT':
      return {
        ...state,
        feed: {
          ...state.feed,
          byId: respectReducer(state.feed.byId, action),
        },
      };
    case 'UNRESPECT_WORKOUT':
      return {
        ...state,
        feed: {
          ...state.feed,
          byId: respectReducer(state.feed.byId, action),
        },
      };
    default:
      return state;
  }
};

export default feedReducer;
