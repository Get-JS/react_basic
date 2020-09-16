import React from 'react';
import { NewsListBlock } from '../styled-component/NewsList';
import NewsItem from './NewsItem';

function NewsList(props) {
  const { loading, articles } = props;

  if (loading) return <NewsListBlock>자료를 불러오는 중 ......</NewsListBlock>;
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
