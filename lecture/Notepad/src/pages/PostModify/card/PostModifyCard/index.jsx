import React from 'react';
import { useSelector } from 'react-redux';
import PostModifyForm from './PostModifyForm';
import * as S from './styled';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import { fetchStatusSelector, LOADING, SUCCESS, FAIL } from 'redux/fetchStatus';
import { postSelector, postAction } from 'redux/post';
const { load } = postAction;

function PostModifyCard() {
  const { status } = useSelector(fetchStatusSelector.getFetchStatus(load));
  const data = useSelector(postSelector.data);

  return (
    <S.Container>
      {status === LOADING && (
        <Container className="loading">
          <CircularProgress size={20} />
        </Container>
      )}
      {status === SUCCESS && !Object.keys(data).length && '게시글이 없습니다.'}
      {status === SUCCESS && <PostModifyForm data={data} />}
      {status === FAIL && 'Error!!!....'}
    </S.Container>
  );
}

export default PostModifyCard;
