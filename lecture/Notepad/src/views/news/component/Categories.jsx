import React from 'react';
import { CategoriesBlock, Category } from '../styled-component/Categories';

function Categories(props) {
  const { categoriesMenu } = props;

  return (
    <CategoriesBlock>
      {categoriesMenu &&
        categoriesMenu.map((category) => (
          <Category
            key={category.name}
            activeClassName="active"
            exact={category.name === 'all'}
            to={category.name === 'all' ? '/news' : `/news/${category.name}`}
          >
            {category.text}
          </Category>
        ))}
    </CategoriesBlock>
  );
}

export default Categories;
