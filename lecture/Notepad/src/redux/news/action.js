import { createAction } from 'redux-actions';
import { createRequestActionTypes } from '../helper/createRequestSaga';
import { NEWS_API_KEY } from 'setting';
export const [NEWS_INFO, NEWS_INFO_SUCCESS, NEWS_INFO_FAILURE] = createRequestActionTypes('newss/NEWS_INFO');

export const getNews = createAction(NEWS_INFO, ({ category }) => ({
  category,
  country: 'kr',
  apiKey: NEWS_API_KEY,
}));
