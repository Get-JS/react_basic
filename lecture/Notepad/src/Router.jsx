import React from 'react';
import { Route } from 'react-router-dom';

import Todo from 'pages/Todo';
// import ProfileRouter from 'components/profile/ProfileRouter';
import NewsPage from 'pages/News';

import PostListPage from 'pages/PostListPage';
import LoginPage from 'pages/Login';
import RegisterPage from 'pages/Register';
// import WritePage from 'pages/WritePage';
// import PostPage from 'pages/PostPage';

import ThunkSaga from 'pages/ThunkSaga';

const App = () => {
  return (
    <>
      <Route path={['/@:username', '/']} exact component={PostListPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      {/* <Route path="/write" component={WritePage} />
      <Route path="/@:username/:postId" component={PostPage} /> */}

      <Route path="/todo" component={Todo} />
      <Route path="/thunkSaga" component={ThunkSaga} />
      <Route path="/news/:selectCategory?" component={NewsPage} />
      {/* <Route
        render={(location) => (
          <div>
            <h2>PAGE NOT FOUND</h2>
            <p>{location.pathname}</p>
          </div>
        )}
      /> */}
    </>
  );
};
export default App;
