import { all } from 'redux-saga/effects';
import { watchAlert } from './alert';
import { watchUser } from './user';
import { watchPost } from './post';
import { watchTodo } from './todo';
import { watchNews } from './news';

function* rootSaga() {
  yield all([watchAlert(), watchUser(), watchPost(), watchTodo(), watchNews()]);
}

export default rootSaga;
