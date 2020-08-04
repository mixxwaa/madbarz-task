import mad from '../api/mad';
import * as TYPE from './types';

export const getFeed = () => async (dispatch) => {
  const skip = 0;
  const skipFeatured = 0;
  const take = 40;
  dispatch({ type: TYPE.LOADING_START });
  try {
    const response = await mad.get('/GetFeed', {
      params: { skip, skipFeatured, take },
    });
    await dispatch({ type: TYPE.FETCH_FEED_DATA, payload: response.data });
    dispatch({ type: TYPE.LOADING_FINISHED });
  } catch (error) {
    console.error(error + '  Something went wrong...');
  }
};

export const updateFeed = () => async (dispatch, getState) => {
  const skipFeatured = getState().feed.featuredCount;
  const take = 40;
  const skip = Object.keys(getState().feed.byId).length;

  const response = await mad.get('/GetFeed', {
    params: { skip, skipFeatured, take },
  });
  dispatch({ type: TYPE.UPDATE_FEED_DATA, payload: response.data });
};

export const respectWorkout = (id, isFromPlan, workoutID) => (dispatch) => {
  mad
    .post('respect', {
      workoutID,
      isFromPlan,
    })
    .catch(() => {
      dispatch({ type: TYPE.UNRESPECT_WORKOUT, id });
    });
  dispatch({
    type: TYPE.RESPECT_WORKOUT,
    id,
  });
};

export const unrespectWorkout = (id, isFromPlan, workoutID) => (dispatch) => {
  mad
    .post('unrespect', {
      workoutID,
      isFromPlan,
    })
    .catch(() => {
      dispatch({ type: TYPE.RESPECT_WORKOUT, id });
    });
  dispatch({ type: TYPE.UNRESPECT_WORKOUT, id });
};
