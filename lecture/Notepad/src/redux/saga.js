import { all } from 'redux-saga/effects';
import { watchUser } from './user';
import { watchPost } from './post';
import { watchTodo } from './todo';
import { watchNews } from './news';

function* rootSaga() {
  yield all([watchUser(), watchPost(), watchTodo(), watchNews()]);
}

export default rootSaga;
