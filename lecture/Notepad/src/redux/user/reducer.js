import { handleActions } from 'redux-actions';
import produce from 'immer';
import {
  CHANGE_FIELD,
  INITIALIZE_FORM,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_VALIDATION,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CHECK_SUCCESS,
  CHECK_FAILURE,
  LOGOUT,
} from './action';

const initialState = {
  register: {
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
    validation: {
      email: { check: true, status: '', msg: '' },
      username: { check: true, status: '', msg: '' },
      password: { check: true, status: '', msg: '' },
      passwordConfirm: { check: true, status: '', msg: '' },
    },
    error: null,
  },
  login: {
    email: '',
    password: '',
    validation: '',
    error: null,
  },
  user: null, // * 유저 정보
  userError: null, // * 유저에 관한 에러
};

export default handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { formType, key, value } }) =>
      produce(state, (draft) => {
        draft[formType][key] = value;
      }),

    [INITIALIZE_FORM]: (state, { payload: formType }) => ({
      ...state,
      [formType]: initialState[formType],
    }),

    [REGISTER_SUCCESS]: (state, { payload: user }) =>
      produce(state, (draft) => {
        draft.register.error = null;
        draft.user = user;
      }),

    [REGISTER_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.register.error = error;
      }),

    [REGISTER_VALIDATION]: (state, { payload: { key, check, status, msg } }) =>
      produce(state, (draft) => {
        if (!draft.register.validation[key]) draft.register.validation[key] = {};
        draft.register.validation[key]['check'] = check;
        draft.register.validation[key]['status'] = status;
        draft.register.validation[key]['msg'] = msg;
      }),

    [LOGIN_SUCCESS]: (state, { payload: user }) =>
      produce(state, (draft) => {
        draft.login.error = null;
        draft.user = user;
      }),

    [LOGIN_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.login.error = error;
      }),

    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      userError: null,
    }),

    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      userError: error,
    }),

    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
  },
  initialState,
);
