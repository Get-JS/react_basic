import { all } from 'redux-saga/effects';

import post from './post';
import user from './user';

export default function* profile() {
  yield all([post(), user()]);
}
