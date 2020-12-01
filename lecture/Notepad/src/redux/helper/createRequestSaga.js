import { call, put, delay } from 'redux-saga/effects';
import { fetchStatusAction } from '../fetchStatus';
const { request, success, fail } = fetchStatusAction;

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}Success`;
  const FAILURE = `${type}Fail`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, requestCall) {
  const SUCESS = `${type}Success`;
  const FAILURE = `${type}Fail`;

  return function* (action) {
    yield put(request(type));
    try {
      yield delay(1000);
      const { data } = yield call(requestCall, action.payload);
      yield put({ type: SUCESS, payload: data });
      yield put(success({ type, data }));
      if (action.resolve) {
        action.resolve(data);
      }
    } catch (error) {
      yield put({ type: FAILURE, payload: error });
      yield put(fail({ type, error }));
      if (action.reject) {
        action.reject(error);
      }
    }
  };
}

export function createRequestThunk(action) {
  return (payload, meta) => (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch({ ...action(payload, meta), resolve, reject });
    });
  };
}
