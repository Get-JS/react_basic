import React from 'react';
import { NavBarContainer, NavBarGroup } from './styled';
import NavLink from 'components/atoms/NavLink';

function NavBar({ data }) {
  return (
    <NavBarContainer>
      <NavBarGroup>
        {data &&
          data.map((link) => (
            <NavLink fullwidth key={link.name} to={link.to}>
              {link.name}
            </NavLink>
          ))}
      </NavBarGroup>
    </NavBarContainer>
  );
}

export default NavBar;
