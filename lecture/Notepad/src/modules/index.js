import { combineReducers, createStore, applyMiddleware } from 'redux';

import counter, { counterSaga } from './counter';
import todos from './todos';
import profile, { profileSaga } from './profile';
import loading from './loading';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  counter,
  todos,
  profile,
  loading,
});

function* rootSaga() {
  yield all([counterSaga(), profileSaga()]);
}

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
export default store;
