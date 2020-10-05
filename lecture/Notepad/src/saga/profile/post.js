import { takeLatest } from 'redux-saga/effects';
import { GET_POST } from '../../redux/profile/post';
import * as api from '../../lib/apis/post';
import createRequestSaga from '../../lib/helper/createRequestSaga';

const getPostSaga = createRequestSaga(GET_POST, api.getPost);

export default function* post() {
  yield takeLatest(GET_POST, getPostSaga);
}
