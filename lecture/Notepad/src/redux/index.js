import { combineReducers } from 'redux';
import user from './user/reducer';
import profile from './profile';
import todos from './todos';
import counter from './counter';
import loading from './loading';

const rootReducer = combineReducers({
  user,
  profile,
  todos,
  counter,
  loading,
});

export default rootReducer;
