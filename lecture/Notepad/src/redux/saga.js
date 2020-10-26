import { all } from 'redux-saga/effects';
import counter from './counter/saga';
import user from './user/saga';
import news from './news/saga';

function* rootSaga() {
  yield all([user(), counter(), news()]);
}

export default rootSaga;
