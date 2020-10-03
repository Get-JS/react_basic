import { createAction, handleActions } from 'redux-actions';
import * as api from '../../lib/apis/users';
import createRequestSaga from '../../lib/redux/createRequestSaga';
import createRequestThunk from '../../lib/redux/createRequestThunk';

export const typeList = {
  GET_USERS: 'user/GET_USERS',
  GET_USER: 'user/GET_USER',
  GET_USERS_SUCESS: 'user/GET_USERS_SUCESS',
  GET_USER_SUCESS: 'user/GET_USER_SUCESS',
};

export const actionList = {
  getUsers: createAction(typeList.GET_USERS),
  getUser: createAction(typeList.GET_USER),
};

export const getUsersThunk = createRequestThunk(
  typeList.GET_USERS,
  api.getUsers,
);
export const getUserThunk = createRequestThunk(typeList.GET_USER, api.getUser);

export const getUsersSaga = createRequestSaga(typeList.GET_USERS, api.getUsers);
export const getUserSaga = createRequestSaga(typeList.GET_USER, api.getUser);

const initialState = {
  users: null,
  user: null,
};

const user = handleActions(
  {
    [typeList.GET_USERS_SUCESS]: (state, { payload }) => ({
      ...state,
      users: payload,
    }),
    [typeList.GET_USER_SUCESS]: (state, { payload }) => ({
      ...state,
      user: payload,
    }),
  },
  initialState,
);

export default user;
