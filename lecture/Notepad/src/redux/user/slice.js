import { createSelector, createSlice } from '@reduxjs/toolkit';

const name = 'USER';

const initialState = {
  user: null,
  checkToken: null,
  error: null,
};

const reducers = {
  load: () => {},
  loadSuccess: (state, { payload: user }) => {
    state.user = user;
    state.error = null;
  },
  loadFailure: (state, { payload: error }) => {
    state.user = null;
    state.error = error;
  },
  register: () => {},
  registerSuccess: (state, { payload: user }) => {
    state.user = user;
    state.error = null;
  },
  registerFailure: (state, { payload: error }) => {
    state.user = null;
    state.error = error;
  },
  login: () => {},
  loginSuccess: (state, { payload: user }) => {
    state.user = user;
    state.error = null;
  },
  loginFailure: (state, { payload: error }) => {
    state.user = null;
    state.error = error;
  },
  check: () => {},
  checkSuccess: (state, { payload: checkToken }) => {
    state.checkToken = checkToken;
    state.error = null;
  },
  checkFailure: (state, { payload: error }) => {
    state.checkToken = null;
    state.error = error;
  },
  logout: (state) => {
    state.user = null;
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});
const selectAllState = createSelector(
  (state) => state.user,
  (state) => state.checkToken,
  (state) => state.error,
  (user, checkToken, error) => {
    return { user, checkToken, error };
  },
);
export const userSelector = {
  all: (state) => selectAllState(state[USER]),
};
export const USER = slice.name;
export const userReducer = slice.reducer;
export const userAction = slice.actions;
