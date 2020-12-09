import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from 'redux/helper/createRequestSaga';
import * as todoAPI from 'utils/apis/todo';
import { todoAction } from './slice';
const { listLoad, add, toggleChecked, remove } = todoAction;

const todoListLoad = createRequestSaga(listLoad, todoAPI.listLoad);
const todoAdd = createRequestSaga(add, todoAPI.add);
const todoToggleChecked = createRequestSaga(toggleChecked, todoAPI.toggleChecked);
const todoRemove = createRequestSaga(remove, todoAPI.remove);

export function* watchTodo() {
  yield takeLatest(listLoad, todoListLoad);
  yield takeLatest(add, todoAdd);
  yield takeLatest(toggleChecked, todoToggleChecked);
  yield takeLatest(remove, todoRemove);
}
