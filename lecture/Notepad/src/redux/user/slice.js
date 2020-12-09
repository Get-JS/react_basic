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

  register: () => {},
  registerSuccess: (state, { payload: data }) => {
    state.user = data;
  },

  login: () => {},
  loginSuccess: (state, { payload: data }) => {
    state.user = data;
  },

  check: () => {},
  checkSuccess: (state, { payload: data }) => {
    state.checkToken = data;
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

const checkThunk = createRequestThunk(slice.actions.check);
const loginThunk = createRequestThunk(slice.actions.login);
const registerThunk = createRequestThunk(slice.actions.register);
slice.actions = { ...slice.actions, checkThunk, loginThunk, registerThunk };
export const USER = slice.name;
export const userReducer = slice.reducer;
export const userAction = slice.actions;
