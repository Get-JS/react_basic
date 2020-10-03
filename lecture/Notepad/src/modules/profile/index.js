import mergeReducers from '../../lib/redux/mergeReducers';
import { takeLatest } from 'redux-saga/effects';
import user, {
  getUserSaga,
  getUsersSaga,
  typeList as userTypeList,
} from './user';
import post, { getPostSaga, typeList as postTypesList } from './post';

export function* profileSaga() {
  yield takeLatest(postTypesList.GET_POST, getPostSaga);
  yield takeLatest(userTypeList.GET_USERS, getUsersSaga);
  yield takeLatest(userTypeList.GET_USER, getUserSaga);
}

export default mergeReducers([user, post]);
