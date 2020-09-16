import React from 'react';
import '../../../assets/scss/todo/TodoTemplate.scss';

function TodoTemplate(props) {
  const { children } = props;

  return (
    <div className="TodoTemplate">
      <div className="app-title">TODO LIST</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default TodoTemplate;
