import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const INCREASE_SAGA_ASYNC = 'counter/INCREASE_SAGA_ASYNC';
const DECREASE_SAGA_ASYNC = 'counter/DECREASE_SAGA_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// * saga-action-test
export const increaseSagaAsync = createAction(
  INCREASE_SAGA_ASYNC,
  () => undefined,
);
export const decreaseSagaAsync = createAction(
  DECREASE_SAGA_ASYNC,
  () => undefined,
);
// * saga-action-test - END

// * thunk test
export const increaseAsync = (e) => (dispatch) => {
  setTimeout(() => {
    console.log('e', e);
    dispatch(increase());
  }, 5000);
};
export const decreaseAsync = (e) => (dispatch) => {
  setTimeout(() => {
    console.log('e', e);
    dispatch(decrease());
  }, 1000);
};
// * thunk test - END

// * saga test
function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  yield takeEvery(INCREASE_SAGA_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_SAGA_ASYNC, decreaseSaga);
}
// * saga test - END

const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
