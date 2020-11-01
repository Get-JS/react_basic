import { combineReducers } from 'redux';
import { USER, userReducer } from './user/slice';
import { POST, postReducer } from './post/slice';
import todo from './todo/reducer';
import news from './news/reducer';
import counter from './counter/reducer';
import { LOADING, loadingReducer } from './loading/slice';

const rootReducer = combineReducers({
  [LOADING]: loadingReducer,
  [USER]: userReducer,
  [POST]: postReducer,
  todo,
  news,
  counter,
});

export default rootReducer;
