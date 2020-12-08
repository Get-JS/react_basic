import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styled';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import NewsItem from './NewsItem';
import { fetchStatusSelector, LOADING, SUCCESS, FAIL } from 'redux/fetchStatus';
import { newsAction, newsSelector } from 'redux/news';
const { listLoad } = newsAction;

function PostDetailCard() {
  const { status } = useSelector(fetchStatusSelector.getFetchStatus(listLoad));
  const listData = useSelector(newsSelector.listData);

  return (
    <S.Container>
      {status === LOADING && (
        <Container className="loading">
          <CircularProgress size={20} />
        </Container>
      )}
      {status === SUCCESS && !listData.length && '게시글이 없습니다.'}
      {status === SUCCESS && listData.map((article) => <NewsItem key={article.url} data={article} />)}
      {status === FAIL && 'Error!!!....'}
    </S.Container>
  );
}

export default PostDetailCard;
