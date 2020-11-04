import { createSelector, createSlice } from '@reduxjs/toolkit';
import { init, success, fail } from '../helper/fetchData';

const name = 'USER';

const initialState = {
  user: null,
  checkToken: null,

  loadFetch: init(),
  registerFetch: init(),
  loginFetch: init(),
  checkFetch: init(),
};

const reducers = {
  load: (state) => {
    state.loadFetch = initialState.loadFetch;
  },
  loadSuccess: (state, { payload: data }) => {
    state.user = data;
    state.loadFetch = success(data);
  },
  loadFail: (state, { payload: error }) => {
    state.user = null;
    state.loadFetch = fail(error);
  },

  register: (state) => {
    state.registerFetch = initialState.registerFetch;
  },
  registerSuccess: (state, { payload: data }) => {
    state.user = data;
    state.registerFetch = success(data);
  },
  registerFail: (state, { payload: error }) => {
    state.registerFetch = fail(error);
  },

  login: (state) => {
    state.loginFetch = initialState.loginFetch;
  },
  loginSuccess: (state, { payload: data }) => {
    state.user = data;
    state.loginFetch = success(data);
  },
  loginFail: (state, { payload: error }) => {
    state.user = null;
    state.loginFetch = fail(error);
  },

  check: (state) => {
    state.checkFetch = initialState.checkFetch;
  },
  checkSuccess: (state, { payload: data }) => {
    state.checkToken = data;
    state.checkFetch = success(data);
  },
  checkFail: (state, { payload: error }) => {
    state.checkToken = null;
    state.checkFetch = fail(error);
  },

  logout: () => {
    return initialState;
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
  (user, checkToken) => {
    return { user, checkToken };
  },
);
const selectUserState = createSelector(
  (state) => state.user,
  (user) => {
    return user;
  },
);
const selectCheckTokenState = createSelector(
  (state) => state.checkToken,
  (checkToken) => {
    return checkToken;
  },
);
export const userSelector = {
  all: (state) => selectAllState(state[USER]),
  user: (state) => selectUserState(state[USER]),
  checkToken: (state) => selectCheckTokenState(state[USER]),
  loadFetch: (state) => selectAllState(state[USER].loadFetch),
  registerFetch: (state) => selectAllState(state[USER].registerFetch),
  loginFetch: (state) => selectAllState(state[USER].loginFetch),
  checkFetch: (state) => selectAllState(state[USER].checkFetch),
};
export const USER = slice.name;
export const userReducer = slice.reducer;
export const userAction = slice.actions;
