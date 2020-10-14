import { takeLatest, throttle } from 'redux-saga/effects';
import createRequestSaga from 'redux/helper/createRequestSaga';
import { removeAccessToken } from 'utils/http/auth';
import * as userAPI from 'utils/apis/user';
import { CHECK, CHECK_FAILURE, REGISTER, LOGIN, LOGOUT } from 'redux/user/action';

export const check = createRequestSaga(CHECK, userAPI.check); // * ok
export const login = createRequestSaga(LOGIN, userAPI.login); // * ok
export const register = createRequestSaga(REGISTER, userAPI.register);

function* checkFailure() {
  removeAccessToken();
}

function* logout() {
  try {
    removeAccessToken();
  } catch (e) {}
}

export default function* user() {
  yield takeLatest(REGISTER, register);
  yield throttle(1000, LOGIN, login);
  yield takeLatest(CHECK, check);
  yield takeLatest(CHECK_FAILURE, checkFailure);
  yield takeLatest(LOGOUT, logout);
}
