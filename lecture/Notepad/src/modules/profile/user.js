import { handleActions } from 'redux-actions';
import * as api from '../../lib/apis/users';
import createRequestThunk from '../../lib/redux/createRequestThunk';

export const GET_USERS = 'user/GET_USERS';
export const GET_USERS_SUCESS = 'user/GET_USERS_SUCESS';

export const GET_USER = 'user/GET_USER';
export const GET_USER_SUCESS = 'user/GET_USER_SUCESS';

export const getUsers = createRequestThunk(GET_USERS, api.getUsers);
export const getUser = createRequestThunk(GET_USER, api.getUser);

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
