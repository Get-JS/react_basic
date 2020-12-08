import React, { memo } from 'react';
import { NewsNavBarContainer } from './styled';
import NavLink from 'components/atoms/NavLink';

function NewsNavBar({ data }) {
  return (
    <NewsNavBarContainer>
      {data &&
        data.map((link) => (
          <NavLink
            key={link.name}
            activeClassName="active"
            exact={link.name === 'all'}
            to={link.name === 'all' ? '/news' : `/news/${link.name}`}
          >
            {link.text}
          </NavLink>
        ))}
    </NewsNavBarContainer>
  );
}

export default memo(NewsNavBar);
