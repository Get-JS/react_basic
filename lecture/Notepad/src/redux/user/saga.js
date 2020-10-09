import { takeLatest, call } from 'redux-saga/effects';
import createRequestSaga from 'redux/helper/createRequestSaga';
import * as userAPI from 'utils/apis/user';
import { CHECK, CHECK_FAILURE, REGISTER, LOGIN, LOGOUT } from 'redux/user/action';

const check = createRequestSaga(CHECK, userAPI.check);
const login = createRequestSaga(LOGIN, userAPI.login);
const register = createRequestSaga(REGISTER, userAPI.register);

function checkFailure() {
  try {
    localStorage.removeItem('user');
  } catch (e) {
    console.log('localStorage is not working');
  }
}

function* logout() {
  try {
    yield call(userAPI.logout);
    localStorage.removeItem('user');
  } catch (e) {
    console.log(e);
  }
}

export default function* user() {
  yield takeLatest(REGISTER, register);
  yield takeLatest(LOGIN, login);
  yield takeLatest(CHECK, check);
  yield takeLatest(CHECK_FAILURE, checkFailure);
  yield takeLatest(LOGOUT, logout);
}
