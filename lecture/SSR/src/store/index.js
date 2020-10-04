import { applyMiddleware, createStore } from "redux";
import rootReducer, { rootSaga } from "../modules";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  window.__PRELOADED_STATE__, // * 이 값을 초기상태로 사용함
  applyMiddleware(thunk, sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export default store;
