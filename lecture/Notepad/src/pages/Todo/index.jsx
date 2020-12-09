import React from 'react';
import BasedTemplate from 'components/templates/BasedTemplate';
import * as S from './styled';
import TodoCard from './card/TodoCard';
import usePageFilter from './hooks/usePageFilter';

function TodoPage() {
  usePageFilter();

  return (
    <BasedTemplate>
      <S.TodoSection>
        <TodoCard />
      </S.TodoSection>
    </BasedTemplate>
  );
}

export default TodoPage;
