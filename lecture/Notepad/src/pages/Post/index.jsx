import React from 'react';
import * as S from './styled';
import BasedTemplate from 'components/templates/BasedTemplate';
import PostDetailCard from './card/PostDetailCard';
import usePageFilter from './hooks/usePageFilter';

function PostPage() {
  usePageFilter();

  return (
    <BasedTemplate>
      <S.PostDetailSection>
        <PostDetailCard />
      </S.PostDetailSection>
    </BasedTemplate>
  );
}

export default PostPage;
