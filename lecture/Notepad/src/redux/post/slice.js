import { createSelector, createSlice } from '@reduxjs/toolkit';
import { init, success, fail } from '../helper/fetchData';

const name = 'POST';

const initialState = {
  data: {},
  listData: {},

  loadFetch: init(),
  listLoadFetch: init(),
  writeFetch: init(),
  updateFetch: init(),
  removeFetch: init(),
};

const reducers = {
  setInit: () => {
    return initialState;
  },
  setChangeFieldState: (state, { payload: { name, value } }) => {
    state[name] = value;
  },
  setChangeState: (state, { payload }) => {
    return { ...state, ...payload };
  },

  loadFetchInit: (state) => {
    state.loadFetch = initialState.loadFetch;
  },
  load: (state) => {
    state.loadFetch = initialState.loadFetch;
  },
  loadSuccess: (state, { payload: data }) => {
    state.data = data;
    state.loadFetch = success(data);
  },
  loadFail: (state, { payload: error }) => {
    state.loadFetch = fail(error);
  },

  listLoad: (state) => {
    state.listLoadFetch = initialState.listLoadFetch;
  },
  listLoadSuccess: (state, { payload: data }) => {
    state.data = data;
    state.listLoadFetch = success(data);
  },
  listLoadFail: (state, { payload: error }) => {
    state.listLoadFetch = fail(error);
  },

  writeFetchInit: (state) => {
    state.writeFetch = initialState.writeFetch;
  },
  write: (state) => {
    state.writeFetch = initialState.writeFetch;
  },
  writeSuccess: (state, { payload: data }) => {
    state.form = null;
    state.writeFetch = success(data);
  },
  writeFail: (state, { payload: error }) => {
    state.form = null;
    state.writeFetch = fail(error);
  },

  update: (state) => {
    state.updateFetch = initialState.updateFetch;
  },
  updateSuccess: (state, { payload: data }) => {
    state.updateFetch = success(data);
  },
  updateFail: (state, { payload: error }) => {
    state.updateFetch = fail(error);
  },

  remove: (state) => {
    state.removeFetch = initialState.removeFetch;
  },
  removeSuccess: (state, { payload: data }) => {
    state.form = null;
    state.removeFetch = success(data);
  },
  removeFail: (state, { payload: error }) => {
    state.removeFetch = fail(error);
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

export const postSelector = {
  all: (state) => selectAllState(state[POST]),
  data: (state) => selectAllState(state[POST].data),
  listData: (state) => selectAllState(state[POST].listData),
  loadFetch: (state) => selectAllState(state[POST].loadFetch),
  listLoadFetch: (state) => selectAllState(state[POST].listLoadFetch),
  writeFetch: (state) => selectAllState(state[POST].writeFetch),
  updateFetch: (state) => selectAllState(state[POST].updateFetch),
  removeFetch: (state) => selectAllState(state[POST].removeFetch),
};
export const POST = slice.name;
export const postReducer = slice.reducer;
export const postAction = slice.actions;
