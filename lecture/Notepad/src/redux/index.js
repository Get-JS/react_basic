import { combineReducers } from 'redux';
import user from './user/reducer';
import todo from './todo/reducer';
import news from './news/reducer';
import counter from './counter/reducer';
import loading from './loading';

const rootReducer = combineReducers({
  user,
  todo,
  news,
  counter,
  loading,
});

export default rootReducer;
