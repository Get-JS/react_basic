import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import './assets/scss/router/NavLinkList.scss';
import TodoContainer from './views/todo/container/TodoContainer';
import ProfileRouter from './views/profile/ProfileRouter';
import NewsContainer from './views/news/container/NewsContainer';
import CounterContainer from './views/counter/container/CounterContainer';

function Router() {
  return (
    <BrowserRouter>
      <ul className="NavLinkList">
        <li>
          <NavLink activeClassName={'active'} to="/todo">
            TODO
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={'active'} to="/counter">
            COUNTER
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={'active'} to="/profile">
            PROFILE
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={'active'} to="/news">
            NEWS
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={TodoContainer} />
        <Route path="/todo" component={TodoContainer} />
        <Route path="/counter" component={CounterContainer} />
        <Route path="/profile" component={ProfileRouter} />
        <Route path="/news/:selectCategory?" component={NewsContainer} />
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
