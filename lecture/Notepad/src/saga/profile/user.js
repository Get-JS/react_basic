import { takeLatest } from 'redux-saga/effects';
import { GET_USERS, GET_USER } from '../../redux/profile/user';
import * as api from '../../lib/apis/user';
import createRequestSaga from '../../lib/helper/createRequestSaga';

const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);
const getUserSaga = createRequestSaga(GET_USER, api.getUser);

export default function* user() {
  yield takeLatest(GET_USERS, getUsersSaga);
  yield takeLatest(GET_USER, getUserSaga);
}
