import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';

function Tags({ tags }) {
  return (
    <S.Container>
      {tags?.map((tag) => (
        <Link className="tag" to={`?tag=${tag}`} key={tag}>
          #{tag}
        </Link>
      ))}
    </S.Container>
  );
}

export default Tags;
