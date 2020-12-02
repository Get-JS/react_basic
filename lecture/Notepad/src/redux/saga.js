import { all } from 'redux-saga/effects';
import { watchAlert } from './alert';
import { watchUser } from './user';
import { watchPost } from './post';
import { watchTodo } from './todo';
import news from './news/saga';

function* rootSaga() {
  yield all([watchAlert(), watchUser(), watchPost(), watchTodo(), news()]);
}

export default rootSaga;
