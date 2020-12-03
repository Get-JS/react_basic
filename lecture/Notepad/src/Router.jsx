import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Todo from 'pages/Todo';
import NewsPage from 'pages/News';
import PostListPage from 'pages/PostList';
import LoginPage from 'pages/Login';
import RegisterPage from 'pages/Register';
import PostModifyPage from 'pages/PostModify';
import PostPage from 'pages/Post';
import { history } from './history';

function RouterConfig() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={['/post/list/:username?', '/']} exact component={PostListPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/post/modify/:postId" component={PostModifyPage} />
        <Route path="/post/:postId" component={PostPage} />

        <Route path="/todo" component={Todo} />
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
