import React from 'react';
import * as S from './styled';
import BasedTemplate from 'components/templates/BasedTemplate';
import PostSection from './section/PostSection';

function PostPage() {
  return (
    <BasedTemplate contentTitle={'Post Page'}>
      <S.PostSection>
        <PostSection />
      </S.PostSection>
    </BasedTemplate>
  );
}

export default PostPage;
