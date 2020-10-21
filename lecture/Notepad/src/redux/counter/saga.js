import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { INCREASE_SAGA_ASYNC, DECREASE_SAGA_ASYNC, increase, decrease } from 'redux/counter/action';

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}
function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export default function* counter() {
  yield takeEvery(INCREASE_SAGA_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_SAGA_ASYNC, decreaseSaga);
}
