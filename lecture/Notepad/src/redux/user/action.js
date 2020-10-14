import { createAction } from 'redux-actions';
import { createRequestActionTypes } from '../helper/createRequestSaga';

export const CHANGE_FIELD = 'user/CHANGE_FIELD';
export const INITIALIZE_FORM = 'user/INITIALIZE_FORM';
export const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('user/LOGIN');
export const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('user/REGISTER');
export const REGISTER_VALIDATION = 'user/REGISTER_VALIDATION';
export const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes('user/CHECK');
export const LOGOUT = 'user/LOGOUT';

export const initializeForm = createAction(INITIALIZE_FORM, (formType) => formType);
export const changeField = createAction(CHANGE_FIELD, ({ formType, key, value }) => ({
  formType,
  key,
  value,
}));
export const check = createAction(CHECK);
export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password,
}));
export const register = createAction(REGISTER, ({ sign_up_type, email, username, password }) => ({
  sign_up_type,
  email,
  username,
  password,
}));
export const registerValidation = createAction(REGISTER_VALIDATION, ({ key, check, status, msg }) => ({
  key,
  check,
  status,
  msg,
}));
export const logout = createAction(LOGOUT);
