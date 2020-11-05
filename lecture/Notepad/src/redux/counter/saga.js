import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { counterAction } from './slice';
const { increaseSaga, decreaseSaga, increase, decrease } = counterAction;

function* counterIncreaseSaga() {
  yield delay(1000);
  yield put(increase());
}
function* counterDecreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* watchCounter() {
  yield takeEvery(increaseSaga, counterIncreaseSaga);
  yield takeLatest(decreaseSaga, counterDecreaseSaga);
}
