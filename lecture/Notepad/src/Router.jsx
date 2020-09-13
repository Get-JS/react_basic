import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import TodoContainer from './views/todo/container/TodoContainer';
import ProfileRouter from './views/profile/component/ProfileRouter';

function Router() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/todo">TODO</Link>
        </li>
        <li>
          <Link to="/profile">PROFILE</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" exact component={TodoContainer} />
        <Route path="/todo" component={TodoContainer} />
        <Route path="/profile" component={ProfileRouter} />
        <Route
          render={(location) => (
            <div>
              <h2>PAGE NOT FOUND</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
