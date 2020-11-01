import React, { useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styled';
import { postSelector, postAction } from 'redux/post/slice';
const { changeFormState } = postAction;

function TagItem({ tag }) {
  const dispatch = useDispatch();
  const { tags } = useSelector(postSelector.form);

  const onRemove = useCallback(
    (tag) => {
      const nextTags = tags.filter((t) => t !== tag);
      dispatch(changeFormState({ tags: nextTags }));
    },
    [dispatch, tags],
  );

  return <S.TagItem onClick={() => onRemove(tag)}>#{tag} [x]</S.TagItem>;
}

export default memo(TagItem);
