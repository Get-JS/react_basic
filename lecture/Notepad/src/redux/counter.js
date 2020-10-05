import { createAction, handleActions } from 'redux-actions';

export const INCREASE = 'counter/INCREASE';
export const DECREASE = 'counter/DECREASE';
export const INCREASE_SAGA_ASYNC = 'counter/INCREASE_SAGA_ASYNC';
export const DECREASE_SAGA_ASYNC = 'counter/DECREASE_SAGA_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseSagaAsync = createAction(INCREASE_SAGA_ASYNC);
export const decreaseSagaAsync = createAction(DECREASE_SAGA_ASYNC);

export const counterTypeList = {
  INCREASE,
  DECREASE,
  INCREASE_SAGA_ASYNC,
  DECREASE_SAGA_ASYNC,
};
export const counterActionList = {
  increase,
  decrease,
  increaseSagaAsync,
  decreaseSagaAsync,
};

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
