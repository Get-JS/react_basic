import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';

function SubInfo({ username, publishedDate, hasMarginTop, to }) {
  return (
    <S.Container hasMarginTop={hasMarginTop}>
      <span>
        <b>
          <Link to={to}>{username}</Link>
        </b>
      </span>
      <span>{publishedDate && new Date(publishedDate).toLocaleDateString()}</span>
    </S.Container>
  );
}

export default SubInfo;
