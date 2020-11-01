import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as S from './styled';
import TagList from '../TagList';
import { postSelector, postAction } from 'redux/post/slice';
const { changeFormState } = postAction;

function TagBox() {
  const dispatch = useDispatch();
  const { tags = [] } = useSelector(postSelector.form);
  const { register, handleSubmit } = useForm({
    defaultValues: { tagName: '' },
  });

  const onSubmit = useCallback(
    (data) => {
      const { tagName } = data;
      if (tags.includes(tagName)) return;
      dispatch(changeFormState({ tags: [...tags, tagName] }));
    },
    [dispatch, tags],
  );

  return (
    <S.TagBoxContainer>
      <h4>태그</h4>
      <S.TagForm onSubmit={handleSubmit(onSubmit)}>
        <input name="tagName" placeholder="태그를 입력하세요" ref={register} />
        <button type="submit">추가</button>
      </S.TagForm>
      <TagList tags={tags} />
    </S.TagBoxContainer>
  );
}

export default TagBox;
