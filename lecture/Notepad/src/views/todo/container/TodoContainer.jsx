import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from '../component/TodoTemplate';
import TodoInsert from '../component/TodoInsert';
import TodoList from '../component/TodoList';
import todoData from '../../../@fake-db/todo';

function TodoContainer() {
  const [todos, setTodos] = useState(todoData || []);

  const nextId = useRef(todos.length + 1);

  const handleAdd = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current++;
  }, []);

  const handleRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const toggleTodoCheck = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        handleRemove={handleRemove}
        toggleTodoCheck={toggleTodoCheck}
      />
    </TodoTemplate>
  );
}

export default TodoContainer;
