import React from 'react';
import * as S from './styled';
import BasedTemplate from 'components/templates/BasedTemplate';
import PostModifyCard from './card/PostModifyCard';
import usePageFilter from './hooks/usePageFilter';

function PostModifyPage() {
  usePageFilter();

  return (
    <BasedTemplate contentTitle={'Post Modify Page'}>
      <S.PostModifySection>
        <PostModifyCard />
      </S.PostModifySection>
    </BasedTemplate>
  );
}

export default PostModifyPage;
