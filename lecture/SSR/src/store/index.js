import { applyMiddleware, createStore } from "redux";
import rootReducer from "../modules";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  window.__PRELOADED_STATE__, // * 이 값을 초기상태로 사용함
  applyMiddleware(thunk)
);
export default store;
