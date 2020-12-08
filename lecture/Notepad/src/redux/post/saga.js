import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from 'redux/helper/createRequestSaga';
import * as postAPI from 'utils/apis/post';
import { postAction } from './slice';
const { load, listLoad, add, modify, remove } = postAction;

const postLoad = createRequestSaga(load, postAPI.load);
const postListLoad = createRequestSaga(listLoad, postAPI.listLoad);
const postAdd = createRequestSaga(add, postAPI.add);
const postUpdate = createRequestSaga(modify, postAPI.modify);
const postRemove = createRequestSaga(remove, postAPI.remove, '삭제 완료');

export function* watchPost() {
  yield takeLatest(load, postLoad);
  yield takeLatest(listLoad, postListLoad);
  yield takeLatest(add, postAdd);
  yield takeLatest(modify, postUpdate);
  yield takeLatest(remove, postRemove);
}
