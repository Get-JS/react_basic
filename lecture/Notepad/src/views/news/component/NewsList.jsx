import React from 'react';
import { NewsListBlock } from '../styled-component/NewsList';
import NewsItem from './NewsItem';

function NewsList(props) {
  const { loading, articles, error } = props;

  if (loading) return <NewsListBlock>자료를 불러오는 중 ......</NewsListBlock>;
  if (error) return <NewsListBlock>에러 발생</NewsListBlock>;
  return (
    <NewsListBlock>
      {articles &&
        articles.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
    </NewsListBlock>
  );
}

export default NewsList;
