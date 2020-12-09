import React from 'react';
import * as S from './styled';
import BasedTemplate from 'components/templates/BasedTemplate';
import PostAddCard from './card/PostAddCard';

function PostAddPage() {
  return (
    <BasedTemplate contentTitle={'Post Add Page'}>
      <S.PostAddSection>
        <PostAddCard />
      </S.PostAddSection>
    </BasedTemplate>
  );
}

export default PostAddPage;
