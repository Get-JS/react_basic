import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as S from './styled';
import SubInfo from '../SubInfo';
import Tags from '../Tags';

function PostItem({ loading, done, data, error }) {
  // 로딩중
  if (loading) {
    return <CircularProgress size={20} />;
  }

  // 데이터가 없을 때
  if (done && !Object.keys(data).length) {
    return '존재하지 않는 포스트입니다.';
  }

  // 에러 발생 시
  if (error?.response && error?.response?.status === 404) {
    return '존재하지 않는 포스트입니다.';
  }

  return (
    <>
      <S.PostHead>
        <h1>{data.title}</h1>
        <SubInfo username={data.user?.username} publishedDate={data.publishedDate} hasMarginTop />
        <Tags tags={data.tags} />
      </S.PostHead>
      <S.PostContent dangerouslySetInnerHTML={{ __html: data.body }} />
    </>
  );
}

export default PostItem;
