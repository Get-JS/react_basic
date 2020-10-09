import { createAction } from 'redux-actions';
import { createRequestActionTypes } from '../helper/createRequestSaga';

export const CHANGE_FIELD = 'user/CHANGE_FIELD';
export const INITIALIZE_FORM = 'user/INITIALIZE_FORM';
export const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('user/LOGIN');
export const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('user/REGISTER');
export const TEMP_SET_USER = 'user/TEMP_SET_USER'; // * 새로고침 이후 임시 로그인 처리
export const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes('user/CHECK');
export const LOGOUT = 'user/LOGOUT';

export const changeField = createAction(CHANGE_FIELD, ({ formType, key, value }) => ({
  formType,
  key,
  value,
}));
export const initializeForm = createAction(INITIALIZE_FORM, (formType) => formType);
export const register = createAction(REGISTER, ({ username, password }) => ({
  username,
  password,
}));
export const login = createAction(LOGIN, ({ username, password }) => ({
  username,
  password,
}));
export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);
