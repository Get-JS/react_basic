import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Todo from 'pages/Todo';
import NewsPage from 'pages/News';
import PostListPage from 'pages/PostListPage';
import LoginPage from 'pages/Login';
// import RegisterPage from 'pages/Register';
import WritePostPage from 'pages/WritePost';
// import PostPage from 'pages/PostPage';
import ThunkSagaPage from 'pages/ThunkSaga';
import { history } from './history';

function RouterConfig() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={['/@:username', '/']} exact component={PostListPage} permission />
        <Route path="/login" component={LoginPage} />
        {/* <Route path="/register" component={RegisterPage} /> */}
        <Route path="/write/post" component={WritePostPage} />
        {/* <Route path="/@:username/:postId" component={PostPage} /> */}

        <Route path="/todo" component={Todo} />
        <Route path="/thunkSaga" component={ThunkSagaPage} />
        <Route path="/news/:selectCategory?" component={NewsPage} />
        {/* <Route 
        render={(location) => (
          <div>
            <h2>PAGE NOT FOUND</h2>
            <p>{location.pathname}</p>
          </div>
        )}
      /> */}
      </Switch>
    </Router>
  );
}
export default RouterConfig;
