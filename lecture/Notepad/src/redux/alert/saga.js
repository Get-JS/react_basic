import { select, put, takeLatest } from 'redux-saga/effects';
import { alertAction, alertSelector } from './slice';
const { confirmPendingAction, closeAlert } = alertAction;

function* pendingProccess() {
  const { pendingConfirmationAction } = yield select(alertSelector.all);
  if (typeof pendingConfirmationAction === 'function') yield pendingConfirmationAction();
  yield put(closeAlert());
}

export function* watchAlert() {
  yield takeLatest(confirmPendingAction, pendingProccess);
}
