import React from 'react';
import * as S from './styled';
import Button from 'components/atoms/Button';

function Pagination({ page, lastPage, handleSearch }) {
  return (
    <S.PaginationWrapper>
      <Button disabled={page === 1} onClick={() => handleSearch({ page: page - 1 })}>
        이전
      </Button>
      <S.PageNumber>{page}</S.PageNumber>
      <Button disabled={page === lastPage} onClick={() => handleSearch({ page: page + 1 })}>
        다음
      </Button>
    </S.PaginationWrapper>
  );
}

export default Pagination;
