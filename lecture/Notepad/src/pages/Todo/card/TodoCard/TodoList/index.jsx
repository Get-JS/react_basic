import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import * as S from './styled';
import TodoItem from '../TodoItem';

function TodoList({ listData }) {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const data = listData[index];
      return <TodoItem key={key} data={data} style={style} />;
    },
    [listData],
  );

  return (
    <S.Container>
      <List
        list={listData}
        rowCount={listData.length}
        width={512}
        height={513}
        rowHeight={57}
        rowRenderer={rowRenderer}
        style={{ outline: 'none', width: '100%' }}
      />
    </S.Container>
  );
}

export default TodoList;
