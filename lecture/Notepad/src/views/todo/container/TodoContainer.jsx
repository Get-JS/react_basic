import React from 'react';
import { connect } from 'react-redux';
import TodoTemplate from '../component/TodoTemplate';
import TodoInsert from '../component/TodoInsert';
import TodoList from '../component/TodoList';
import { insert, toggle, remove } from '../../../modules/todos';

function TodoContainer(props) {
  const { todos, insert, toggle, remove } = props;
  return (
    <TodoTemplate>
      <TodoInsert handleAdd={insert} />
      <TodoList todos={todos} handleRemove={remove} toggleTodoCheck={toggle} />
    </TodoTemplate>
  );
}
const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

export default connect(mapStateToProps, { insert, toggle, remove })(
  TodoContainer,
);
