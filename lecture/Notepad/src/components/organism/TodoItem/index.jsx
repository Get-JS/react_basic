import React, { memo } from 'react';
import { TodoItemContainer, TodoWrapper, TodoText } from './styled';
import { useDispatch } from 'react-redux';
import { toggle, remove } from 'redux/todo/action';
import CloseIcon from 'components/atoms/CloseIcon';
import CheckBoxIcon from 'components/atoms/CheckBoxIcon/index';

function TodoItem({ todo, style }) {
  const { id, text, checked } = todo;
  const dispatch = useDispatch();

  return (
    <TodoItemContainer style={style}>
      <TodoWrapper onClick={() => dispatch(toggle(id))}>
        <CheckBoxIcon checked={checked} />
        <TodoText checked={checked}>{text}</TodoText>
      </TodoWrapper>
      <CloseIcon onClick={() => dispatch(remove(id))} />
    </TodoItemContainer>
  );
}

export default memo(TodoItem);
