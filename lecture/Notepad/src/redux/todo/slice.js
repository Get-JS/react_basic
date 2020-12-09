import { createSelector, createSlice } from '@reduxjs/toolkit';
const name = 'TODO';

const initialState = {
  totalCount: 0,
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
    state.totalCount = data?.totalCount || state.totalCount;
    state.listData = data?.list || [];
  },

  add: () => {},
  addSuccess: (state, { payload: data }) => {
    state.listData.push(data);
  },

  toggleChecked: () => {},
  toggleCheckedSuccess: (state, { payload: data }) => {
    const todo = state.listData.find((todo) => todo.id === data.id);
    todo.checked = data.checked;
  },

  remove: () => {},
  removeSuccess: (state, { payload: id }) => {
    const fIdx = state.listData.findIndex((todo) => todo.id === id);
    state.listData.splice(fIdx, 1);
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

export const todoSelector = {
  all: (state) => selectAllState(state[TODO]),
  listData: (state) => selectAllState(state[TODO].listData),
};

export const TODO = slice.name;
export const todoReducer = slice.reducer;
export const todoAction = slice.actions;
