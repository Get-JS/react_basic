import { all } from 'redux-saga/effects';
import profile from './profile/';
import auth from './auth';
import user from './user';

function* rootSaga() {
  yield all([profile(), auth(), user()]);
}

export default rootSaga;
