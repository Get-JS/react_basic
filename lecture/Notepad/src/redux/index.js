import { combineReducers } from 'redux';
import { ALERT, alertReducer } from './alert';
import { FETCH_STATUS, fetchStatusReducer } from './fetchStatus';
import { LOADING, loadingReducer } from './loading';
import { USER, userReducer } from './user';
import { POST, postReducer } from './post';
import todo from './todo/reducer';
import news from './news/reducer';
import { COUNTER, counterReducer } from './counter';

const rootReducer = combineReducers({
  [ALERT]: alertReducer,
  [FETCH_STATUS]: fetchStatusReducer,
  [LOADING]: loadingReducer,
  [USER]: userReducer,
  [POST]: postReducer,
  todo,
  news,
  [COUNTER]: counterReducer,
});

export default rootReducer;
