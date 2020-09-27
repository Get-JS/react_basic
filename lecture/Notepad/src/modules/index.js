import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counter from './counter';
import todos from './todos';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  counter,
  todos
});

const logger = createLogger();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, ReduxThunk)));

export default store;