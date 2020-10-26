import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { NewsListContainer } from './styled';
import { getNews } from 'redux/news/action';
import NewsItem from 'components/organism/NewsItem';
import { useSelector, useDispatch } from 'react-redux';
function NewsList({ match }) {
  const articleArr = useSelector(({ news }) => news.news);
  const dispatch = useDispatch();
  const { selectCategory } = match.params;
  // const [loading, error, articleArr] = useGetNews({category: selectCategory});
  useEffect(() => {
    dispatch(getNews({ category: selectCategory }));
  }, [selectCategory]);
  console.log('articleArr', articleArr);
  return (
    <NewsListContainer>
      {/* {loading && <NewsListBlock>자료를 불러오는 중 ......</NewsListBlock>} */}
      {/* {error && <NewsListBlock>에러 발생</NewsListBlock>} */}
      {articleArr && articleArr.map((article) => <NewsItem key={article.url} article={article} />)}
    </NewsListContainer>
  );
}

export default withRouter(NewsList);
