import React from "react";
import UsersContainer from "../containers/UsersContainer";
import UserContainer from "../containers/UserContainer";
import { Route } from "react-router-dom";

// * Route에 component 대신 render를 설정해 줌으로 써 UserContainer를 렌더링할 때
// * URL 파라미터 id를 props로 바로 집어 넣어 줄 수 있다.
const UsersPage = () => {
  return (
    <>
      <UsersContainer />
      <Route
        path="/users/:id"
        render={({ match }) => <UserContainer id={match.params.id} />}
      />
    </>
  );
};

export default UsersPage;
