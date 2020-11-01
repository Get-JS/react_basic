import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from 'redux/helper/createRequestSaga';
import * as postAPI from 'utils/apis/post';
import { postAction } from './slice';
const { write } = postAction;

const postWrite = createRequestSaga(write, postAPI.writePost);

export function* watchPost() {
  yield takeLatest(write, postWrite);
}
