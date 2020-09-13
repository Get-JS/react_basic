import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Profile from './Profile';

function ProfileRouter() {
  return (
    <BrowserRouter>
      <h1>Admin</h1>
      <ul>
        <li>
          <Link to="/profile/test12?detail=true">PROFILE: test12</Link>
        </li>
      </ul>
      <hr />
      <Route path="/profile" exact component={() => <div>select userId</div>} />
      <Route path="/profile/:userId" component={Profile} />
    </BrowserRouter>
  );
}

export default ProfileRouter;
