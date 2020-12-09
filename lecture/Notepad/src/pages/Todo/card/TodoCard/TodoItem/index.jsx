import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './styled';
import CloseIcon from 'components/atoms/CloseIcon';
import CheckBoxIcon from 'components/atoms/CheckBoxIcon';
import { todoAction } from 'redux/todo';
const { toggleChecked, remove } = todoAction;

function TodoItem({ data, style }) {
  const dispatch = useDispatch();

  return (
    <S.Container style={style}>
      <S.Wrapper onClick={() => dispatch(toggleChecked({ id: data.id }))}>
        <CheckBoxIcon checked={data.checked} />
        <S.TodoText checked={data.checked}>{data.text}</S.TodoText>
      </S.Wrapper>
      <CloseIcon onClick={() => dispatch(remove({ id: data.id }))} />
    </S.Container>
  );
}

export default memo(TodoItem);
