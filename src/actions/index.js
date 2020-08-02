import mad from '../api/mad';

export const getFeed = () => async (dispatch) => {
  dispatch({ type: 'LOAD_USERS' });
  try {
    const response = await mad.get('/GetFeed', {
      params: { skip: 0, skipFeatured: 5, take: 40 },
    });
    await dispatch({ type: 'SET_USERS', payload: response.data });
    dispatch({ type: 'FINISHED_LOADING' });
  } catch (error) {
    console.error(error + '  Something went wrong...');
  }
};

export const respectWorkout = (id, isPlan, workoutId) => (dispatch) => {
  mad
    .post('respect', {
      workoutID: workoutId,
      isFromPlan: isPlan,
    })
    .catch(() => {
      dispatch({ type: 'UNRESPECT_WORKOUT', id });
    });
  dispatch({
    type: 'RESPECT_WORKOUT',
    id,
  });
};

export const unrespectWorkout = (id, isPlan, workoutId) => (dispatch) => {
  mad
    .post('unrespect', {
      workoutID: workoutId,
      isFromPlan: isPlan,
    })
    .catch(() => {
      dispatch({ type: 'RESPECT_WORKOUT', id });
    });
  dispatch({ type: 'UNRESPECT_WORKOUT', id });
};
