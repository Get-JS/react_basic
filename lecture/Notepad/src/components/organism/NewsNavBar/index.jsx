import React from 'react';
import { NewsNavBarContainer } from './styled';
import NavLink from 'components/atoms/NavLink';

function NewsNavBar({ NewsLinkArr }) {
  return (
    <NewsNavBarContainer>
      {NewsLinkArr &&
        NewsLinkArr.map((link) => (
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

export default NewsNavBar;
