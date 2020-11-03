import { combineReducers } from 'redux';
import { ALERT, alertReducer } from './alert';
import { LOADING, loadingReducer } from './loading';
import { USER, userReducer } from './user';
import { POST, postReducer } from './post';
import todo from './todo/reducer';
import news from './news/reducer';
import counter from './counter/reducer';

const rootReducer = combineReducers({
  [ALERT]: alertReducer,
  [LOADING]: loadingReducer,
  [USER]: userReducer,
  [POST]: postReducer,
  todo,
  news,
  counter,
});

export default rootReducer;
