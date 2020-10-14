import { all } from 'redux-saga/effects';
// import profile from './profile/';
import user from './user/saga';

function* rootSaga() {
  yield all([user()]);
}

export default rootSaga;
