import { handleActions } from 'redux-actions';
import produce from 'immer';
import { NEWS_INFO_SUCCESS, NEWS_INFO_FAILURE } from './action';

const initialState = {
  news: [],
  error: null,
};

export default handleActions(
  {
    [NEWS_INFO_SUCCESS]: (state, { payload: news }) =>
      produce(state, (draft) => {
        draft.news = news?.articles;
        draft.error = null;
      }),

    [NEWS_INFO_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.news = null;
        draft.error = error;
      }),
  },
  initialState,
);
