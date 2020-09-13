import React from 'react';
import TodoListItem from './TodoListItem';
import '../../../assets/scss/todo/TodoList.scss';

function TodoList(props) {
  const { handleRemove, toggleTodoCheck } = props;
  const { todos } = props;
  return (
    <div className="TodoList">
      {todos &&
        todos.map((todo) => (
          <TodoListItem
            todo={todo}
            handleRemove={handleRemove}
            toggleTodoCheck={toggleTodoCheck}
            key={todo.id}
          />
        ))}
    </div>
  );
}

export default TodoList;
