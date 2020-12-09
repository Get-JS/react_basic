import React from 'react';
import { useForm } from 'react-hook-form';
import * as S from './styled';
import TagItem from './TagItem';

function TagBoxController({ tags, handleAddTag, handleRemoveTag }) {
  const { register, reset, getValues } = useForm({
    defaultValues: { tagName: '' },
  });

  return (
    <S.Container>
      <h4>태그</h4>
      <S.Wrapper>
        <input name="tagName" placeholder="태그를 입력하세요" ref={register} />
        <button
          onClick={(e) => {
            e.preventDefault();
            const tagName = getValues('tagName');
            if (tagName && !tags.includes(tagName)) handleAddTag(tagName);
            reset();
          }}
        >
          추가
        </button>
      </S.Wrapper>
      <S.TagList>
        {tags.map((tag, index) => (
          <TagItem index={index} key={tag} tagName={tag} handleRemoveTag={handleRemoveTag} />
        ))}
      </S.TagList>
    </S.Container>
  );
}

export default TagBoxController;
