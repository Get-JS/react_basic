import { createAction, handleActions } from 'redux-actions';
import * as api from '../../lib/apis/user';
import createRequestThunk from '../../lib/helper/createRequestThunk';

export const GET_USERS = 'user/GET_USERS';
export const GET_USER = 'user/GET_USER';
export const GET_USERS_SUCESS = 'user/GET_USERS_SUCESS';
export const GET_USER_SUCESS = 'user/GET_USER_SUCESS';

export const getUsers = createAction(GET_USERS);
export const getUser = createAction(GET_USER);

export const userTypeList = {
  GET_USERS,
  GET_USER,
  GET_USERS_SUCESS,
  GET_USER_SUCESS,
};
export const userActionList = {
  getUsers,
  getUser,
};

export const getUsersThunk = createRequestThunk(GET_USERS, api.getUsers);
export const getUserThunk = createRequestThunk(GET_USER, api.getUser);

const initialState = {
  users: null,
  user: null,
};

const user = handleActions(
  {
    [GET_USERS_SUCESS]: (state, { payload }) => ({
      ...state,
      users: payload,
    }),
    [GET_USER_SUCESS]: (state, { payload }) => ({
      ...state,
      user: payload,
    }),
  },
  initialState,
);

export default user;
