import React from 'react';
import { NavBarBlock, NavBarGroup } from './styled-modules/NavBar';
import NavLink from 'components/atoms/NavLink/';

function NavBar() {
  return (
    <NavBarBlock>
      <NavBarGroup>
        <NavLink fullwidth to="/todo">
          TODO
        </NavLink>
      </NavBarGroup>

      <NavBarGroup>
        <NavLink fullwidth to="/counter">
          COUNTER
        </NavLink>
      </NavBarGroup>

      <NavBarGroup>
        <NavLink fullwidth to="/profile">
          PROFILE
        </NavLink>
      </NavBarGroup>

      <NavBarGroup>
        <NavLink fullwidth to="/news">
          NEWS
        </NavLink>
      </NavBarGroup>
    </NavBarBlock>
  );
}

export default NavBar;
