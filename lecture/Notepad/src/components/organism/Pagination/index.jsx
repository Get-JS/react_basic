import React from 'react';
import * as S from './styled';
import Button from 'components/atoms/Button';

function Pagination({ page, lastPage, handleSearch }) {
  return (
    <S.Container>
      <Button disabled={page === 1} onClick={() => handleSearch({ currentPage: page - 1 })}>
        이전
      </Button>
      <span>{page}</span>
      <Button disabled={page === lastPage} onClick={() => handleSearch({ currentPage: page + 1 })}>
        다음
      </Button>
    </S.Container>
  );
}

export default Pagination;
