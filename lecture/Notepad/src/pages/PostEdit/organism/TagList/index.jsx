import React from 'react';
import * as S from './styled';
import TagItem from '../TagItem';

function TagList({ tags }) {
  return (
    <S.TagList>
      {tags.map((tag) => (
        <TagItem key={tag} tag={tag} />
      ))}
    </S.TagList>
  );
}
export default TagList;
