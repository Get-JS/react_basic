import { handleActions } from 'redux-actions';
import * as api from '../../lib/apis/post';
import createRequestThunk from '../../lib/redux/createRequestThunk';

export const GET_POST = 'post/GET_POST';
export const GET_POST_SUCESS = 'post/GET_POST_SUCESS';

export const getPost = createRequestThunk(GET_POST, api.getPost);

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
