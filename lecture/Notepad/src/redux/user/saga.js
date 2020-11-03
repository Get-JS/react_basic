import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from 'redux/helper/createRequestSaga';
import { removeAccessToken } from 'utils/http/auth';
import * as userAPI from 'utils/apis/user';
import { userAction } from './slice';
const { load, check, login, register, checkFail, logout } = userAction;

const userLoad = createRequestSaga(load, userAPI.getUser);
const userCheck = createRequestSaga(check, userAPI.check);
const userLogin = createRequestSaga(login, userAPI.login);

const userRegister = createRequestSaga(register, userAPI.register);

function userCheckFail() {
  removeAccessToken();
}
function userLogout() {
  removeAccessToken();
}

export function* watchUser() {
  yield takeLatest(load, userLoad);
  yield takeLatest(check, userCheck);
  yield takeLatest(login, userLogin);
  yield takeLatest(register, userRegister);
  yield takeLatest(checkFail, userCheckFail);
  yield takeLatest(logout, userLogout);
}
