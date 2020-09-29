import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';
import counter, { counterSaga } from './counter';
import todos from './todos';
import profile from './profile';
import loading from './loading';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  counter,
  todos,
  profile,
  loading,
});

function* rootSaga() {
  yield all([counterSaga()]);
}

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
export default store;
