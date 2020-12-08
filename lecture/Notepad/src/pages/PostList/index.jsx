import React from 'react';
import { Helmet } from 'react-helmet-async';
import * as S from './styled';
import BasedTemplate from 'components/templates/BasedTemplate';
import PostListCard from './card/PostListCard';
import usePageFilter from './hooks/usePageFilter';

function PostListPage() {
  usePageFilter();

  return (
    <BasedTemplate>
      <Helmet>
        <title>POST_LIST 메인</title>
      </Helmet>
      <S.PostListSection>
        <PostListCard />
      </S.PostListSection>
    </BasedTemplate>
  );
}

export default PostListPage;
