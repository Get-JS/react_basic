import { combineReducers } from 'redux';
import { ALERT, alertReducer } from './alert';
import { FETCH_STATUS, fetchStatusReducer } from './fetchStatus';
import { USER, userReducer } from './user';
import { POST, postReducer } from './post';
import { TODO, todoReducer } from './todo';
import news from './news/reducer';
import { COUNTER, counterReducer } from './counter';

const rootReducer = combineReducers({
  [ALERT]: alertReducer,
  [FETCH_STATUS]: fetchStatusReducer,
  [USER]: userReducer,
  [POST]: postReducer,
  [TODO]: todoReducer,
  news,
  [COUNTER]: counterReducer,
});

export default rootReducer;
