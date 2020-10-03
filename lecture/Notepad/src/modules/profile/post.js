import { createAction, handleActions } from 'redux-actions';
import * as api from '../../lib/apis/post';
import createRequestThunk from '../../lib/redux/createRequestThunk';
import createRequestSaga from '../../lib/redux/createRequestSaga';

export const typeList = {
  GET_POST: 'post/GET_POST',
  GET_POST_SUCESS: 'post/GET_POST_SUCESS',
  GET_POST_FAILURE: 'post/GET_POST_FAILURE',
};

export const actionList = {
  getPost: createAction(typeList.GET_POST),
};

export const getPostThunk = createRequestThunk(typeList.GET_POST, api.getPost);
export const getPostSaga = createRequestSaga(typeList.GET_POST, api.getPost);

const initialState = {
  post: null,
};

const post = handleActions(
  {
    [typeList.GET_POST_SUCESS]: (state, { payload }) => ({
      ...state,
      post: payload,
    }),
  },
  initialState,
);

export default post;
