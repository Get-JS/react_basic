import { createSelector, createSlice } from '@reduxjs/toolkit';
const name = 'NEWS';

const initialState = {
  listData: [],
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

  listLoad: () => {},
  listLoadSuccess: (state, { payload: data }) => {
    state.totalCount = data?.totalResults || state.totalResults;
    state.listData = data?.articles || [];
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

export const newsSelector = {
  all: (state) => selectAllState(state[NEWS]),
  listData: (state) => selectAllState(state[NEWS].listData),
};

export const NEWS = slice.name;
export const newsReducer = slice.reducer;
export const newsAction = slice.actions;
