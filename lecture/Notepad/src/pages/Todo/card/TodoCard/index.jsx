import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styled';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import { fetchStatusSelector, LOADING, SUCCESS, FAIL } from 'redux/fetchStatus';
import { todoSelector, todoAction } from 'redux/todo';
const { listLoad } = todoAction;

function TodoCard() {
  const { status } = useSelector(fetchStatusSelector.getFetchStatus(listLoad));
  const listData = useSelector(todoSelector.listData);

  return (
    <S.Container>
      <S.TodoContent>
        {status === LOADING && (
          <Container className="loading">
            <CircularProgress size={20} />
          </Container>
        )}
        {status === SUCCESS && !listData.length && '데이터가 없습니다.'}
        {status === SUCCESS && (
          <>
            <S.TodoTitle>TODO LIST</S.TodoTitle>
            <TodoInsert />
            <TodoList listData={listData} />
          </>
        )}
        {status === FAIL && 'Error!!!....'}
      </S.TodoContent>
    </S.Container>
  );
}

export default TodoCard;
