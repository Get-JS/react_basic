import { handleActions } from 'redux-actions';
import produce from 'immer';

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
    error: null,
  },
  login: {
    username: '',
    password: '',
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

    [LOGIN_SUCCESS]: (state, { payload: user }) =>
      produce(state, (draft) => {
        draft.login.error = null;
        draft.user = user;
      }),

    [LOGIN_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.login.error = error;
      }),

    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
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
