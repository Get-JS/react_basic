import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styled';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import SubInfo from 'components/organism/SubInfo';
import Tags from 'components/organism/Tags';
import { fetchStatusSelector, LOADING, SUCCESS, FAIL } from 'redux/fetchStatus';
import { postSelector, postAction } from 'redux/post';
import { URL_GROUP, getPostListQuery } from 'configs/links/urls';
const { load } = postAction;

function PostDetailCard() {
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
      {status === SUCCESS && (
        <>
          <S.PostHead>
            <h1>{data.title}</h1>
            <SubInfo
              username={data.user?.username}
              publishedDate={data.publishedDate}
              hasMarginTop
              to={`${URL_GROUP.POST_LIST}/${getPostListQuery({ username: data.user?.username })}`}
            />
            <Tags tags={data.tags} handleTo={(tag) => `${URL_GROUP.POST_LIST}/${getPostListQuery({ tag })}`} />
          </S.PostHead>
          <S.PostContent dangerouslySetInnerHTML={{ __html: data.body }} />
        </>
      )}
      {status === FAIL && 'Error!!!....'}
    </S.Container>
  );
}

export default PostDetailCard;
