import { all } from 'redux-saga/effects';
import { watchAlert } from './alert';
import { watchUser } from './user';
import { watchPost } from './post';
import { watchCounter } from './counter';
import { watchTodo } from './todo';
import news from './news/saga';

function* rootSaga() {
  yield all([watchAlert(), watchUser(), watchPost(), watchCounter(), watchTodo(), news()]);
}

export default rootSaga;
