import React from "react";
import ReactDOMServer from "react-dom/server"; // * 서버에서 리액트 컴포넌트를 렌더링할 때 사용
import { StaticRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./modules";
import PreloadContext from "./lib/PreloadContext";
import App from "./App";

import express from "express";
import path from "path";
import fs from "fs";

// * asset-manifest.json에서 파일 경로들을 조회
const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf8")
);

const chunks = Object.keys(manifest.files)
  .filter((key) => /chunk\.js$/.exec(key)) // * chunk.js로 끝나는 키를 찾아서
  .map((key) => `<script src="${manifest.files[key]}"></script>`) // * 스크립트 태그로 변환하고
  .join(""); // * 합침

// * JS와 CSS 파일을 불러오도록 html에 코드를 삽입해야 한다.
// * stateScript -> API를 통해 받아 온 데이터를 렌더링 하지만,
// * 서버에서 렌더링하는 과정에서 만들어진 스토어의 상태를 브라우저에서 재사용하지 못하는 상황이다.
// * 서버에서 만들어 준 상태를 브라우저에서 재사용하려면, 현재 스토어 상태를 문자열로 변환한 뒤 스크립트로 주입해야 한다.
function createPage(root, stateScript) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000" />
      <title>React App</title>
      <link href="${manifest.files["main.css"]}" rel="stylesheet" />
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">
        ${root}
      </div>
      ${stateScript}
      <script src="${manifest.files["runtime-main.js"]}"></script>
      ${chunks}
      <script src="${manifest.files["main.js"]}"></script>
    </body>
    </html>
  `;
}

const app = express();

const serverRender = async (req, res, next) => {
  const context = {};
  // * 서버가 실행될 때 스토어를 한 번만 만드는것이 아니라, 요청이 들어올 때마다 새로운 스토어를 만든다.
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const preloadContext = {
    done: false,
    promises: [],
  };
  const jsx = (
    <PreloadContext.Provider value={preloadContext}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </PreloadContext.Provider>
  );

  // * renderToStaticMarkup으로 한 번 렌더링
  // * 리액트를 사용하여 정적인 페이지를 만들 때 사용한다.
  // * 이 함수로 만든 리액트 렌더링 결과물은 클라이언트 쪽에서 HTML, DOM 인터렉션을 지원하기 힘들다.
  // * 현재는 그저 Preloader로 넣어 주었던 함수를 호출하기 위해서 이다.
  ReactDOMServer.renderToStaticMarkup(jsx);
  try {
    await Promise.all(preloadContext.promises); // * 모든 프로미스를 기다린다.
  } catch (error) {
    return res.status(500);
  }
  preloadContext.done = true;
  const root = ReactDOMServer.renderToString(jsx); // * 렌더링
  // * JSON을 문자열로 변환하고 악성 스크립트가 실행되는 것을 방지하기 위해 <를 치환 처리
  const stateString = JSON.stringify(store.getState()).replace(/</g, "\\u003c");
  const stateScript = `<script>__PRELOADED_STATE__ = ${stateString}</script>`; // * 리덕스 초기 상태를 스크릅트로 주입한다.
  res.send(createPage(root, stateScript));
};

const serve = express.static(path.resolve("./build"), {
  index: false, // * "/" 경로에서 index.html 을 보여주지 않도록 설정
});

app.use(serve);
app.use(serverRender);

app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
