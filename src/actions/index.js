import mad from '../api/mad';

// eslint-disable-next-line import/prefer-default-export
export const getFeed = () => async (dispatch) => {
  //dispatch({ type: 'LOAD_USERS' });
  const response = await mad.get('', {
    params: { skip: 0, skipFeatured: 5, take: 40 },
  });
  const userData = Object.keys(response.data.byId).map(
    (key) => response.data.byId[key]
  );
  dispatch({
    type: 'SET_USERS',
    payload: userData,
  });
  dispatch({ type: 'FINISHED_LOADING' });
};

export const getText = () => {
  return { type: 'GET_TEXT' };
};
