import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import { TodoListContainer } from './styled';
import TodoItem from 'components/organism/TodoItem';
import { useSelector } from 'react-redux';

function TodoList() {
  const todoArr = useSelector(({ todo }) => todo.todoArr);

  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todoArr[index];
      return <TodoItem todo={todo} key={key} style={style} />;
    },
    [todoArr],
  );

  return (
    <TodoListContainer>
      <List
        list={todoArr}
        rowCount={todoArr.length}
        width={512}
        height={513}
        rowHeight={57}
        rowRenderer={rowRenderer}
        style={{ outline: 'none' }}
      />
    </TodoListContainer>
  );
}

export default TodoList;
