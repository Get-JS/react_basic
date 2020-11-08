import React from 'react';
import * as S from './styled';
import TagItem from '../TagItem';

function TagList({ tags, handleRemoveTag }) {
  return (
    <S.TagList>
      {tags.map((tagName, index) => (
        <TagItem index={index} key={tagName} tagName={tagName} handleRemoveTag={handleRemoveTag} />
      ))}
    </S.TagList>
  );
}
export default TagList;
