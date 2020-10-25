import React from 'react';
import { TodoTemplateBlock, TodoTitle, TodoContent } from './styled-modules/TodoTemplate';

function TodoTemplate(props) {
  const { title, children } = props;

  return (
    <TodoTemplateBlock>
      <TodoTitle>{title}</TodoTitle>
      <TodoContent>{children}</TodoContent>
    </TodoTemplateBlock>
  );
}

export default TodoTemplate;
