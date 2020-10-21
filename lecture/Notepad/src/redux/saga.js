import { all } from 'redux-saga/effects';
import counter from './counter/saga';
import user from './user/saga';

function* rootSaga() {
  yield all([user(), counter()]);
}

export default rootSaga;
