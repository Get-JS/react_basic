import { createSelector, createSlice } from '@reduxjs/toolkit';
import { createRequestThunk } from '../helper/createRequestSaga';
const name = 'POST';

const initialState = {
  totalCount: 0,
  listData: [],
  data: {},
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

  unload: (state) => {
    state.data = initialState.data;
  },
  load: () => {},
  loadSuccess: (state, { payload: data }) => {
    state.data = data;
  },

  listLoad: () => {},
  listLoadSuccess: (state, { payload: data }) => {
    state.totalCount = data?.totalCount || state.totalCount;
    state.listData = data?.list || [];
  },

  add: () => {},
  modify: () => {},
  remove: () => {},
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

const selectPageOpption = createSelector(
  (state) => state.totalCount,
  (state) => state.pageSize,
  (totalCount, pageSize) => {
    return {
      totalCount,
      pageSize,
    };
  },
);

export const postSelector = {
  all: (state) => selectAllState(state[POST]),
  listData: (state) => selectAllState(state[POST].listData),
  data: (state) => selectAllState(state[POST].data),
  pageOption: (state) => selectPageOpption(state[POST]),
};

const addThunk = createRequestThunk(slice.actions.add);
const modifyThunk = createRequestThunk(slice.actions.modify);
const removeThunk = createRequestThunk(slice.actions.remove);
slice.actions = { ...slice.actions, addThunk, modifyThunk, removeThunk };
export const POST = slice.name;
export const postReducer = slice.reducer;
export const postAction = slice.actions;
