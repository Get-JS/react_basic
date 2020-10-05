import React from "react";
import { Route } from "react-router-dom";
import Menu from "./components/Menu";
import loadable from "@loadable/component";
// * 서버 렌더링 시 페이지가 처음에 나타났다가, 사라지는 현상이 나타난다.
// * webpack과 babel plugin을 적용해야 한다.
const RedPage = loadable(() => import("./pages/RedPage"));
const BluePage = loadable(() => import("./pages/BluePage"));
const UsersPage = loadable(() => import("./pages/UsersPage"));

function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
      <Route path="/users" component={UsersPage} />
    </div>
  );
}

export default App;
