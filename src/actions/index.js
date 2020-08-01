import mad from '../api/mad';

export const getFeed = () => async (dispatch) => {
  dispatch({ type: 'LOAD_USERS' });
  const response = await mad.get('/GetFeed', {
    params: { skip: 0, skipFeatured: 5, take: 40 },
  });
  dispatch({
    type: 'SET_USERS',
    payload: response.data,
  });
  dispatch({ type: 'FINISHED_LOADING' });
};

export const getText = () => {
  return { type: 'GET_TEXT' };
};

export const respectWorkout = (id, isPlan, workoutId) => (dispatch) => {
  mad.post('respect', {
    workoutID: workoutId,
    isFromPlan: isPlan,
  });
  dispatch({
    type: 'RESPECT_WORKOUT',
    id,
  });
};

export const unrespectWorkout = (id, isPlan, workoutId) => (dispatch) => {
  mad.post('unrespect', {
    workoutID: workoutId,
    isFromPlan: isPlan,
  });
  dispatch({ type: 'UNRESPECT_WORKOUT', id });
};
