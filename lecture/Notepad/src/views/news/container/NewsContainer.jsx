import React from 'react';
import axios from 'axios';
import NewsList from '../component/NewsList';
import Categories from '../component/Categories';
import categoriesMenu from '../../../config/menu/News/CategoriesMenu';
import usePromise from '../../../lib/hooks/usePromise';

function NewsContainer(props) {
  const { match } = props;
  const { selectCategory } = match.params;

  const [loading, response, error] = usePromise(() => {
    const query = !selectCategory ? '' : `&category=${selectCategory}`;
    return axios.get(
      `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e585fe20a46048f89a7400e950c22bd9`,
    );
  }, [selectCategory]);

  return (
    <>
      <Categories categoriesMenu={categoriesMenu} />
      <NewsList
        articles={response?.data?.articles}
        loading={loading}
        error={error}
      />
    </>
  );
}

export default NewsContainer;
