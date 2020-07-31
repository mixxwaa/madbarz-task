//import { combineReducers } from 'redux';

const initialState = {
  feed: {},
  status: 'idle',
  error: null,
};

const usersReducer = (state = { feed: {}, loading: true }, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, feed: action.payload };
    case 'LOAD_USERS':
      return { ...state, loading: true };
    case 'FINISHED_LOADING':
      return { ...state, loading: false };
    case 'GET_TEXT':
      return state.feed;
    default:
      return state;
  }
};

export default usersReducer;
