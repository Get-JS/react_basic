import { all } from 'redux-saga/effects';
import { watchAlert } from './alert';
import { watchUser } from './user';
import { watchPost } from './post';
import counter from './counter/saga';
import news from './news/saga';

function* rootSaga() {
  yield all([watchAlert(), watchUser(), watchPost(), counter(), news()]);
}

export default rootSaga;
