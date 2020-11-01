import { all } from 'redux-saga/effects';
import counter from './counter/saga';
import { watchUser } from './user/saga';
import news from './news/saga';

function* rootSaga() {
  yield all([watchUser(), counter(), news()]);
}

export default rootSaga;
