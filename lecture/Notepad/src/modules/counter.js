import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const INCREASE_SAGA_ASYNC = 'counter/INCREASE_SAGA_ASYNC';
const DECREASE_SAGA_ASYNC = 'counter/DECREASE_SAGA_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseSagaAsync = createAction(
  INCREASE_SAGA_ASYNC,
  () => undefined, // * 마우스 클릭 이벤트가 payload 안에 들어가지 않도록 설정
);
export const decreaseSagaAsync = createAction(
  DECREASE_SAGA_ASYNC,
  () => undefined,
);

export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

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
