import { call, put } from 'redux-saga/effects';
import { loadingAction } from '../loading/slice';
const { startLoading, finishLoading } = loadingAction;

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}Success`;
  const FAILURE = `${type}Failure`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCESS = `${type}Success`;
  const FAILURE = `${type}Failure`;

  return function* (action) {
    yield put(startLoading(type));
    try {
      const { data } = yield call(request, action.payload);
      yield put({
        type: SUCESS,
        payload: data,
      });
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
      });
    } finally {
      yield put(finishLoading(type));
    }
  };
}
