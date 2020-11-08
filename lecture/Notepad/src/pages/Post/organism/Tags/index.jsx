import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';

function Tags({ tags }) {
  return (
    <S.TagsContainer>
      {tags?.map((tag) => (
        <Link className="tag" to={`./?tag=${tag}`} key={tag}>
          #{tag}
        </Link>
      ))}
    </S.TagsContainer>
  );
}

export default Tags;
