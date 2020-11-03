import { createSelector, createSlice } from '@reduxjs/toolkit';

const name = 'USER';

const initialState = {
  user: null,
  checkToken: null,
};

const reducers = {
  load: () => {},
  loadSuccess: (state, { payload: user }) => {
    state.user = user;
  },
  loadFail: (state) => {
    state.user = null;
  },

  register: () => {},
  registerSuccess: (state, { payload: user }) => {
    state.user = user;
  },
  registerFail: () => {},

  login: () => {},
  loginSuccess: (state, { payload: user }) => {
    state.user = user;
  },
  loginFail: (state) => {
    state.user = null;
  },

  check: () => {},
  checkSuccess: (state, { payload: checkToken }) => {
    state.checkToken = checkToken;
  },
  checkFail: (state) => {
    state.checkToken = null;
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
export const userSelector = {
  all: (state) => selectAllState(state[USER]),
};
export const USER = slice.name;
export const userReducer = slice.reducer;
export const userAction = slice.actions;
