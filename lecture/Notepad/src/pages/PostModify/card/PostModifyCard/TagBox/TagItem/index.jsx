import React, { memo } from 'react';
import * as S from './styled';

function TagItem({ index, tagName, handleRemoveTag }) {
  return (
    <S.TagItem
      onClick={(e) => {
        e.preventDefault();
        handleRemoveTag(index);
      }}
    >
      #{tagName} [x]
    </S.TagItem>
  );
}

export default memo(TagItem);
