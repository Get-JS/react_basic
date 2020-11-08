import React from 'react';
import { useForm } from 'react-hook-form';
import * as S from './styled';
import TagList from '../TagList';

function TagBox({ tags, handleAddTag, handleRemoveTag }) {
  const { register, reset, watch } = useForm({
    defaultValues: { tagName: '' },
  });
  const tagName = watch('tagName');

  return (
    <S.TagBoxContainer>
      <h4>태그</h4>
      <S.TagBoxWrapper>
        <input name="tagName" placeholder="태그를 입력하세요" ref={register} />
        <button
          onClick={(e) => {
            e.preventDefault();
            if (!tagName || tags.includes(tagName)) return;
            handleAddTag(tagName);
            reset();
          }}
        >
          추가
        </button>
      </S.TagBoxWrapper>
      <TagList tags={tags} handleRemoveTag={handleRemoveTag} />
    </S.TagBoxContainer>
  );
}

export default TagBox;
