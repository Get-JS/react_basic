import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from 'redux/helper/createRequestSaga';
import { removeAccessToken } from 'utils/http/auth';
import * as userAPI from 'utils/apis/user';
import { userAction } from './slice';
const { userLoad, check, login, register, checkFail, logout } = userAction;

const userLoadSaga = createRequestSaga(userLoad, userAPI.getUser);
const userCheckSaga = createRequestSaga(check, userAPI.check);
const userLoginSaga = createRequestSaga(login, userAPI.login);
const userRegisterSaga = createRequestSaga(register, userAPI.register);
function userCheckFailSaga() {
  removeAccessToken();
}
function userLogoutSaga() {
  removeAccessToken();
}

export function* watchUser() {
  yield takeLatest(userLoad, userLoadSaga);
  yield takeLatest(check, userCheckSaga);
  yield takeLatest(login, userLoginSaga);
  yield takeLatest(register, userRegisterSaga);
  yield takeLatest(checkFail, userCheckFailSaga);
  yield takeLatest(logout, userLogoutSaga);
}
