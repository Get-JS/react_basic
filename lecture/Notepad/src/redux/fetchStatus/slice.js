import { createSelector, createSlice } from '@reduxjs/toolkit';
import { init, loading, success, fail } from './fetchData';

const name = 'FETCH_STATUS';

const initialState = {};

const reducers = {
  initFetch: (state, { payload: { type } }) => {
    state[type] = init();
  },
  request: (state, { payload: { type } }) => {
    state[type] = loading();
  },
  success: (state, { payload: { type, data } }) => {
    state[type] = success(data);
  },
  fail: (state, { payload: { type, error } }) => {
    state[type] = fail(error);
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

export const fetchStatusSelector = {
  all: (state) => selectAllState(state[FETCH_STATUS]),
  getFetchStatus: (type) => (state) => selectAllState(state[FETCH_STATUS][type] || {}),
};
export const FETCH_STATUS = slice.name;
export const fetchStatusReducer = slice.reducer;
export const fetchStatusAction = slice.actions;
