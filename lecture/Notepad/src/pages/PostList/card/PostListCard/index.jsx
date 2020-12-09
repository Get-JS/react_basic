import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styled';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import PostItem from './PostItem';
import PostPagination from './PostPagination';
import { fetchStatusSelector, LOADING, SUCCESS, FAIL } from 'redux/fetchStatus';
import { postSelector, postAction } from 'redux/post';
const { listLoad } = postAction;

function PostListCard() {
  const { status } = useSelector(fetchStatusSelector.getFetchStatus(listLoad));
  const listData = useSelector(postSelector.listData);

  return (
    <S.Container>
      {status === LOADING && (
        <Container className="center">
          <CircularProgress size={20} />
        </Container>
      )}
      {status === SUCCESS && !listData.length && '게시글이 없습니다.'}
      {status === SUCCESS && (
        <>
          {listData?.map((post) => (
            <PostItem key={post.id} data={post} />
          ))}
          <PostPagination />
        </>
      )}
      {status === FAIL && 'Error!!!....'}
    </S.Container>
  );
}

export default PostListCard;
