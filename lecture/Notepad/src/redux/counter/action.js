import { createAction } from 'redux-actions';

export const INCREASE = 'counter/INCREASE';
export const DECREASE = 'counter/DECREASE';
export const INCREASE_SAGA_ASYNC = 'counter/INCREASE_SAGA_ASYNC';
export const DECREASE_SAGA_ASYNC = 'counter/DECREASE_SAGA_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// * thunk test
export const increaseAsync = (e) => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};
export const decreaseAsync = (e) => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};
export const increaseSagaAsync = createAction(INCREASE_SAGA_ASYNC);
export const decreaseSagaAsync = createAction(DECREASE_SAGA_ASYNC);
