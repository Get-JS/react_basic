import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import NewsList from '../component/NewsList';
import Categories from '../component/Categories';
import categoriesMenu from '../../../config/menu/News/CategoriesMenu';

function NewsContainer() {
  const [selectCategory, setSelectCategory] = useState(categoriesMenu[0].name);
  const handleCategory = useCallback(
    (category) => setSelectCategory(category),
    [],
  );

  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query =
          selectCategory === categoriesMenu[0].name
            ? ''
            : `&category=${selectCategory}`;
        const response = await axios.get(
          `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e585fe20a46048f89a7400e950c22bd9`,
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.log('error', error);
      }
      setLoading(false);
    };
    fetchData();
  }, [selectCategory]);

  return (
    <>
      <Categories
        categoriesMenu={categoriesMenu}
        selectCategory={selectCategory}
        handleCategory={handleCategory}
      />
      <NewsList articles={articles} loading={loading} />
    </>
  );
}

export default NewsContainer;
