import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from 'redux/helper/createRequestSaga';
import * as newsAPI from 'utils/apis/news';
import { NEWS_INFO } from 'redux/news/action';

export const getNews = createRequestSaga(NEWS_INFO, newsAPI.getNews);

export default function* news() {
  yield takeLatest(NEWS_INFO, getNews);
}
