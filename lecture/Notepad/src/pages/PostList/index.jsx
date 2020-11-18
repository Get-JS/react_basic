import React from 'react';
import BasedTemplate from 'components/templates/BasedTemplate';
import PostCard from './section/PostCard';
import usePageFilter from './hooks/usePageFilter';

function PostListPage() {
  usePageFilter();

  return (
    <BasedTemplate>
      <PostCard />
    </BasedTemplate>
  );
}

export default PostListPage;
