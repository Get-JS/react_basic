import React from 'react';
import { NavBarContainer, NavBarGroup } from './styled';
import NavLink from 'components/atoms/NavLink';

function NavBar() {
  return (
    <NavBarContainer>
      <NavBarGroup>
        <NavLink fullwidth to="/post/list">
          POST
        </NavLink>
        <NavLink fullwidth to="/todo">
          TODO
        </NavLink>
        <NavLink fullwidth to="/news">
          NEWS
        </NavLink>
      </NavBarGroup>
    </NavBarContainer>
  );
}

export default NavBar;
