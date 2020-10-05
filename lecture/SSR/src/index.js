// * Loadable Components를 사용하면 성능을 취적하기 위해 모든 자바스크립트 파일을 동시에 받아 온다.
// * 모든 스크립트가 로딩되고 나서 렌더링하도록 처리하기 위해서는 loadableReady라는 함수를 사용해야 한다.
// * hydrate라는 함수는 기존에 서버 사이드 렌더링된 결과물이 이미 있을 경우
// * 새로 렌더링하지 않고 기존에 존재하는 UI에 이벤트만 연동하여
// * 애플리케이션을 초기 구동할 때 필요한 리소스를 최소화함으로써 성능을 최적화해 준다.
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadableReady } from "@loadable/component";

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

const root = document.getElementById("root");

// * 프로덕션 환경 에서는 loadableReady 와 hydrate 를 사용하고
// * 개발 환경에서는 기존 하던 방식으로 처리
if (process.env.NODE_ENV === "production") {
  loadableReady(() => {
    ReactDOM.hydrate(<Root />, root);
  });
} else {
  ReactDOM.render(<Root />, root);
}
serviceWorker.unregister();
