import { createSelector, createSlice } from '@reduxjs/toolkit';

const name = 'LOADING';

const initialState = {};

const reducers = {
  startLoading: (state, { payload }) => {
    state[payload] = true;
  },
  finishLoading: (state, { payload }) => {
    state[payload] = false;
  },
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
export const loadingSelector = {
  all: (state) => selectAllState(state[LOADING]),
};
export const LOADING = slice.name;
export const loadingReducer = slice.reducer;
export const loadingAction = slice.actions;
