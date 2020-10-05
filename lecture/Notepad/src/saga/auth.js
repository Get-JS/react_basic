import createRequestSaga from '../lib/helper/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import { REGISTER, LOGIN } from '../redux/auth';
import * as authAPI from '../lib/apis/auth';

const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export default function* auth() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}
