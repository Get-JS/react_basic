import React from 'react';
import BasedTemplate from 'components/templates/BasedTemplate';
import { TodoSection, TodoTitle, TodoContent } from './styled';
import TodoInsert from 'components/organism/TodoInsert';
import TodoList from 'components/organism/TodoList';

function TodoPage() {
  return (
    <BasedTemplate contentTitle={'Todo Page'}>
      <TodoSection>
        <TodoTitle>TODO LIST</TodoTitle>
        <TodoContent>
          <TodoInsert />
          <TodoList />
        </TodoContent>
      </TodoSection>
    </BasedTemplate>
  );
}

export default TodoPage;
