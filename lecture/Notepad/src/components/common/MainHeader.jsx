import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/scss/router/NavLinkList.scss';

function MainHeader() {
  return (
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
  );
}

export default MainHeader;
