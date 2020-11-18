import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styled';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import SubInfo from 'components/organism/SubInfo';
import Tags from 'components/organism/Tags';
import { LOADING, SUCCESS, FAIL } from 'utils/constants';
import { fetchStatusSelector } from 'redux/fetchStatus';
import { postSelector, postAction } from 'redux/post';
const { load } = postAction;

function PostDetailCard() {
  const { status } = useSelector(fetchStatusSelector.getFetchStatus(load));
  const data = useSelector(postSelector.data);

  return (
    <S.PostSection>
      {/* 로딩중 */}
      {status === LOADING && (
        <Container style={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress size={20} />
        </Container>
      )}
      {/* 데이터가 없을 때 */}
      {status === SUCCESS && !Object.keys(data).length && '게시글이 없습니다.'}
      {/* 데이터가 있을 때 */}
      {status === SUCCESS && (
        <>
          <S.PostHead>
            <h1>{data.title}</h1>
            <SubInfo username={data.user?.username} publishedDate={data.publishedDate} hasMarginTop />
            <Tags tags={data.tags} />
          </S.PostHead>
          <S.PostContent dangerouslySetInnerHTML={{ __html: data.body }} />
        </>
      )}
      {/* 에러 발생 시 */}
      {status === FAIL && 'Error!!!....'}
    </S.PostSection>
  );
}

export default PostDetailCard;
