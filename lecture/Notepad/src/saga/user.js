import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/apis/auth';
import createRequestSaga from '../lib/helper/createRequestSaga';
import { CHECK, CHECK_FAILURE, LOGOUT } from '../redux/user';

const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga() {
  try {
    localStorage.removeItem('user'); // * localStorage 에서 user 제거하고
  } catch (e) {
    console.log('localStorage is not working');
  }
}

function* logoutSaga() {
  try {
    yield call(authAPI.logout); // * logout API 호출
    localStorage.removeItem('user'); // * localStorage 에서 user 제거
  } catch (e) {
    console.log(e);
  }
}

export default function* user() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}
