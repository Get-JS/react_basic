import { all } from 'redux-saga/effects';
import { watchUser } from './user/saga';
import { watchPost } from './post/saga';
import counter from './counter/saga';
import news from './news/saga';

function* rootSaga() {
  yield all([watchUser(), watchPost(), counter(), news()]);
}

export default rootSaga;
