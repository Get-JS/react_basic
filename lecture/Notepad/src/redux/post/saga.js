import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from 'redux/helper/createRequestSaga';
import * as postAPI from 'utils/apis/post';
import { postAction } from './slice';
const { load, listLoad, write, update, remove } = postAction;

const postLoad = createRequestSaga(load, postAPI.load);
const postListLoad = createRequestSaga(listLoad, postAPI.listLoad);
const postWrite = createRequestSaga(write, postAPI.write);
const postUpdate = createRequestSaga(update, postAPI.update);
const postRemove = createRequestSaga(remove, postAPI.remove);

export function* watchPost() {
  yield takeLatest(load, postLoad);
  yield takeLatest(listLoad, postListLoad);
  yield takeLatest(write, postWrite);
  yield takeLatest(update, postUpdate);
  yield takeLatest(remove, postRemove);
}
