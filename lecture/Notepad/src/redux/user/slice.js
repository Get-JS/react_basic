import { createSelector, createSlice } from '@reduxjs/toolkit';
import { createRequestThunk } from '../helper/createRequestSaga';
const name = 'USER';

const initialState = {
  user: null,
  checkToken: null,
};

const reducers = {
  userLoad: () => {},
  userLoadSuccess: (state, { payload: data }) => {
    state.user = data;
  },
  userLoadFail: (state) => {
    state.user = null;
  },

  register: () => {},
  registerSuccess: (state, { payload: data }) => {
    state.user = data;
  },

  login: () => {},
  loginSuccess: (state, { payload: data }) => {
    state.user = data;
  },
  loginFail: (state) => {
    state.user = null;
  },

  check: () => {},
  checkSuccess: (state, { payload: data }) => {
    state.checkToken = data;
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
  (state) => state,
  (state) => {
    return state;
  },
);

export const userSelector = {
  all: (state) => selectAllState(state[USER]),
  user: (state) => selectAllState(state[USER].user),
  checkToken: (state) => selectAllState(state[USER].checkToken),
};

const loginThunk = createRequestThunk(slice.actions.login);
slice.actions = { ...slice.actions, loginThunk };
export const USER = slice.name;
export const userReducer = slice.reducer;
export const userAction = slice.actions;
