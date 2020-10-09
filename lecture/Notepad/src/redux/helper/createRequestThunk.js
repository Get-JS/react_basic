import { loadingActionList } from '../loading';

const { startLoading, finishLoading } = loadingActionList;

export default function createRequestThunk(type, request) {
  const SUCESS = `${type}_SUCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (params) => async (dispatch) => {
    dispatch(startLoading(type));
    try {
      const { data } = await request(params);
      dispatch({
        type: SUCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FAILURE,
        payload: error,
        error: true,
      });
      throw error;
    } finally {
      dispatch(finishLoading(type));
    }
  };
}
