import * as TYPE from '../actions/types';

const respectReducer = (state, action) => {
  switch (action.type) {
    case TYPE.RESPECT_WORKOUT:
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
    case TYPE.UNRESPECT_WORKOUT:
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
    case TYPE.FETCH_FEED_DATA:
      return { ...state, feed: action.payload };
    case TYPE.UPDATE_FEED_DATA:
      return {
        ...state,
        feed: {
          ...state.feed,
          ids: [...state.feed.ids, ...action.payload.ids],
          featuredCount:
            state.feed.featuredCount + action.payload.featuredCount,
          byId: { ...state.feed.byId, ...action.payload.byId },
        },
      };
    case TYPE.LOADING_START:
      return { ...state, loading: true };
    case TYPE.LOADING_FINISHED:
      return { ...state, loading: false };

    case TYPE.RESPECT_WORKOUT:
      return {
        ...state,
        feed: {
          ...state.feed,
          byId: respectReducer(state.feed.byId, action),
        },
      };
    case TYPE.UNRESPECT_WORKOUT:
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
