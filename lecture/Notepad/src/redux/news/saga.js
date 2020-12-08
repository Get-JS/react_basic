import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from 'redux/helper/createRequestSaga';
import * as newsAPI from 'utils/apis/news';
import { newsAction } from './slice';
const { listLoad } = newsAction;

export const newsListLoad = createRequestSaga(listLoad, newsAPI.listLoad);

export function* watchNews() {
  yield takeLatest(listLoad, newsListLoad);
}
