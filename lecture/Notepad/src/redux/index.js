import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import profile from './profile';
import todos from './todos';
import counter from './counter';
import loading from './loading';

const rootReducer = combineReducers({
  auth,
  user,
  profile,
  todos,
  counter,
  loading,
});

export default rootReducer;
