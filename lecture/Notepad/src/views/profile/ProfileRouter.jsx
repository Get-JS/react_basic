import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import '../../assets/scss/router/NavLinkList.scss';
import ProfileUserListContainer from './container/ProfileUserListContainer';
import ProfileUserContainer from './container/ProfileUserContainer';

function ProfileRouter() {
  return (
    <BrowserRouter>
      <ul className="NavLinkList">
        <li>
          <NavLink activeClassName="active" to="/profile/userList">
            PROFILE_USER_LIST
          </NavLink>
        </li>
      </ul>
      <Route
        path="/profile"
        exact
        component={() => (
          <h1 style={{ textAlign: 'center', margin: '10px', color: 'red' }}>
            Select userId!!!
          </h1>
        )}
      />
      <Route
        path="/profile/userList"
        exact
        component={ProfileUserListContainer}
      />
      <Route path="/profile/user/:userId" component={ProfileUserContainer} />
    </BrowserRouter>
  );
}

export default ProfileRouter;
