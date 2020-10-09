import React from 'react';
import { Route } from 'react-router-dom';

// import TodoContainer from 'components/todo/container/TodoContainer';
// import ProfileRouter from 'components/profile/ProfileRouter';
// import NewsContainer from 'components/news/container/NewsContainer';
// import CounterContainer from 'components/counter/container/CounterContainer';

// import PostListPage from 'pages/PostListPage';
import LoginPage from 'pages/Login/';
// import RegisterPage from 'pages/RegisterPage';
// import WritePage from 'pages/WritePage';
// import PostPage from 'pages/PostPage';

const App = () => {
  return (
    <>
      {/* <Route path={['/@:username', '/']} exact component={PostListPage} /> */}
      <Route path="/login" component={LoginPage} />
      {/* <Route path="/register" component={RegisterPage} />
      <Route path="/write" component={WritePage} />
      <Route path="/@:username/:postId" component={PostPage} /> */}

      {/* <Route path="/todo" component={TodoContainer} />
      <Route path="/counter" component={CounterContainer} />
      <Route path="/profile" component={ProfileRouter} />
      <Route path="/news/:selectCategory?" component={NewsContainer} /> */}
      <Route
        render={(location) => (
          <div>
            <h2>PAGE NOT FOUND</h2>
            <p>{location.pathname}</p>
          </div>
        )}
      />
    </>
  );
};
export default App;
