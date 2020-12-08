import { combineReducers } from 'redux';
import { ALERT, alertReducer } from './alert';
import { MODAL, modalReducer } from './modal';
import { FETCH_STATUS, fetchStatusReducer } from './fetchStatus';
import { USER, userReducer } from './user';
import { POST, postReducer } from './post';
import { TODO, todoReducer } from './todo';
import news from './news/reducer';

const rootReducer = combineReducers({
  [ALERT]: alertReducer,
  [MODAL]: modalReducer,
  [FETCH_STATUS]: fetchStatusReducer,
  [USER]: userReducer,
  [POST]: postReducer,
  [TODO]: todoReducer,
  news,
});

export default rootReducer;
