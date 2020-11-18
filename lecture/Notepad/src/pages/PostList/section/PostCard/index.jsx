import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styled';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LinkButton } from 'components/atoms/Button';
import PostItem from './PostItem';
import PostPagination from './PostPagination';
import { LOADING, SUCCESS, FAIL } from 'utils/constants';
import { fetchStatusSelector } from 'redux/fetchStatus';
import { postSelector, postAction } from 'redux/post';
import { userSelector } from 'redux/user';
const { listLoad } = postAction;

function PostCard() {
  const { status } = useSelector(fetchStatusSelector.getFetchStatus(listLoad));
  const listData = useSelector(postSelector.listData);
  const user = useSelector(userSelector.user);

  return (
    <S.PostListSection>
      {user && (
        <S.WritePostButtonWrapper>
          <LinkButton cyan to="/post/edit">
            새 글 작성하기
          </LinkButton>
        </S.WritePostButtonWrapper>
      )}
      {/* 로딩중 */}
      {status === LOADING && (
        <Container style={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress size={20} />
        </Container>
      )}
      {/* 데이터가 없을 때 */}
      {status === SUCCESS && !listData.length && '게시글이 없습니다.'}
      {/* 데이터가 있을 때 */}
      {status === SUCCESS && listData && listData.map((post) => <PostItem key={post.id} data={post} />)}
      {/* 에러 발생 시 */}
      {status === FAIL && 'Error!!!....'}
      <PostPagination />
    </S.PostListSection>
  );
}

export default PostCard;
