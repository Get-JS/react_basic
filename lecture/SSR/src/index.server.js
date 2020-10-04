import React from "react";
import ReactDOMServer from "react-dom/server"; // * 서버에서 리액트 컴포넌트를 렌더링할 때 사용
import { StaticRouter } from "react-router-dom";
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
function createPage(root, tags) {
  return `<!DOCTYPE html>
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

  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const root = ReactDOMServer.renderToString(jsx); // * 렌더링
  res.send(createPage(root));
};

const serve = express.static(path.resolve("./build"), {
  index: false, // * "/" 경로에서 index.html 을 보여주지 않도록 설정
});

app.use(serve);
app.use(serverRender);

app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
