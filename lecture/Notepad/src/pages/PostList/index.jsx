import React from 'react';
import * as S from './styled';
import BasedTemplate from 'components/templates/BasedTemplate';
import PostListCard from './card/PostListCard';
import usePageFilter from './hooks/usePageFilter';

function PostListPage() {
  usePageFilter();

  return (
    <BasedTemplate>
      <S.PostListSection>
        <PostListCard />
      </S.PostListSection>
    </BasedTemplate>
  );
}

export default PostListPage;
