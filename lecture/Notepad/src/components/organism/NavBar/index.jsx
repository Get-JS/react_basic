import React from 'react';
import { NavBarContainer, NavBarGroup } from './styled';
import NavLink from 'components/atoms/NavLink';

function NavBar() {
  return (
    <NavBarContainer>
      <NavBarGroup>
        <NavLink fullwidth to="/todo">
          TODO
        </NavLink>
        <NavLink fullwidth to="/thunkSaga">
          THUNK_SAGA
        </NavLink>
        <NavLink fullwidth to="/profile">
          PROFILE
        </NavLink>
        <NavLink fullwidth to="/news">
          NEWS
        </NavLink>
      </NavBarGroup>
    </NavBarContainer>
  );
}

export default NavBar;
