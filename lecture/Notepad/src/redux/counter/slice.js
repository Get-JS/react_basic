import { createSelector, createSlice } from '@reduxjs/toolkit';

const name = 'COUNTER';

const initialState = {
  number: 0,
};

const reducers = {
  increase: (state) => {
    state.number += 1;
  },
  increaseSaga: () => {},
  decrease: (state) => {
    state.number -= 1;
  },
  decreaseSaga: () => {},
};

// * thunk test
const increaseAsync = (_data) => async (dispatch) => {
  setTimeout(() => {
    dispatch(counterAction.increase());
  }, 1000);
};
const decreaseAsync = (_data) => async (dispatch) => {
  setTimeout(() => {
    dispatch(counterAction.decrease());
  }, 1000);
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});
const selectAllState = createSelector(
  (state) => state,
  (state) => {
    return state;
  },
);
export const counterSelector = {
  all: (state) => selectAllState(state[COUNTER]),
};
export const COUNTER = slice.name;
export const counterReducer = slice.reducer;
export const counterAction = { ...slice.actions, increaseAsync, decreaseAsync };
