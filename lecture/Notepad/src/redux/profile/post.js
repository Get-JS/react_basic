import { createAction, handleActions } from 'redux-actions';
import * as api from 'utils/apis/post';
import createRequestThunk from 'redux/helper/createRequestThunk';

export const GET_POST = 'post/GET_POST';
export const GET_POST_SUCESS = 'post/GET_POST_SUCESS';
export const GET_POST_FAILURE = 'post/GET_POST_FAILURE';

export const getPost = createAction(GET_POST);

export const postTypeList = {
  GET_POST,
  GET_POST_SUCESS,
  GET_POST_FAILURE,
};
export const postActionList = { getPost };

export const getPostThunk = createRequestThunk(GET_POST, api.getPost);

const initialState = {
  post: null,
};

const post = handleActions(
  {
    [GET_POST_SUCESS]: (state, { payload }) => ({
      ...state,
      post: payload,
    }),
  },
  initialState,
);

export default post;
