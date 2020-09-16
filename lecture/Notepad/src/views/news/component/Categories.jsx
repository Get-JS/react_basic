import React from 'react';
import { CategoriesBlock, Category } from '../styled-component/Categories';

function Categories(props) {
  const { categoriesMenu } = props;
  const { selectCategory, handleCategory } = props;

  return (
    <CategoriesBlock>
      {categoriesMenu &&
        categoriesMenu.map((category) => (
          <Category
            key={category.name}
            active={selectCategory === category.name}
            onClick={() => handleCategory(category.name)}
          >
            {category.text}
          </Category>
        ))}
    </CategoriesBlock>
  );
}

export default Categories;
