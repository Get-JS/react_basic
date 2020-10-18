import { takeLatest, throttle } from 'redux-saga/effects';
import createRequestSaga from 'redux/helper/createRequestSaga';
import { removeAccessToken } from 'utils/http/auth';
import * as userAPI from 'utils/apis/user';
import { USER_INFO, CHECK, CHECK_FAILURE, REGISTER, LOGIN, LOGOUT } from 'redux/user/action';

export const getUser = createRequestSaga(USER_INFO, userAPI.getUser);
export const check = createRequestSaga(CHECK, userAPI.check);
export const login = createRequestSaga(LOGIN, userAPI.login);
export const register = createRequestSaga(REGISTER, userAPI.register);

function checkFailure() {
  removeAccessToken();
}

function logout() {
  removeAccessToken();
}

export default function* user() {
  yield takeLatest(USER_INFO, getUser);
  yield takeLatest(CHECK, check);
  yield throttle(1000, LOGIN, login);
  yield throttle(1000, REGISTER, register);
  yield takeLatest(CHECK_FAILURE, checkFailure);
  yield takeLatest(LOGOUT, logout);
}
