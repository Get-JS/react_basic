import { combineReducers } from 'redux';
import user from './user/reducer';
import profile from './profile';
import todo from './todo/reducer';
import counter from './counter/reducer';
import loading from './loading';

const rootReducer = combineReducers({
  user,
  profile,
  todo,
  counter,
  loading,
});

export default rootReducer;
