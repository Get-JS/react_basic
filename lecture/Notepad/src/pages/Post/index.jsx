import React from 'react';
import BasedTemplate from 'components/templates/BasedTemplate';
import PostDetailCard from './section/PostDetailCard';
import usePageFilter from './hooks/usePageFilter';

function PostPage() {
  usePageFilter();

  return (
    <BasedTemplate contentTitle={'Post Page'}>
      <PostDetailCard />
    </BasedTemplate>
  );
}

export default PostPage;
