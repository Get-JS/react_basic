import { startLoading, finishLoading } from '../../modules/loading';

export default function createRequestThunk(type, request) {
  const SUCESS = `${type}_SUCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (params) => async (dispatch) => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const { data } = await request(params);
      dispatch({
        type: SUCESS,
        payload: data,
      });
      dispatch(finishLoading(type));
    } catch (error) {
      dispatch({
        type: FAILURE,
        payload: error,
        error: true,
      });
      dispatch(startLoading(type));
      throw error;
    }
  };
}
