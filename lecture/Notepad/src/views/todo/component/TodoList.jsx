import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoItem from './TodoItem';
import '../../../assets/scss/todo/TodoList.scss';

function TodoList(props) {
  const { handleRemove, toggleTodoCheck } = props;
  const { todos } = props;
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoItem
          todo={todo}
          key={key}
          handleRemove={handleRemove}
          toggleTodoCheck={toggleTodoCheck}
          style={style}
        />
      );
    },
    [handleRemove, toggleTodoCheck, todos],
  );

  return (
    <List
      className="TodoList"
      list={todos}
      rowCount={todos.length}
      width={512}
      height={513}
      rowHeight={57}
      rowRenderer={rowRenderer}
      style={{ outline: 'none' }}
    />
  );
}

export default TodoList;
