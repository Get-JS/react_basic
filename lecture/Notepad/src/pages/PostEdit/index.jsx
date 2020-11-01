import React from 'react';
import * as S from './styled';
import BasedTemplate from 'components/templates/BasedTemplate';
import EditorSection from './section/EditorSection';

function PostEdit() {
  return (
    <BasedTemplate contentTitle={'Post Editor Page'}>
      <S.EditorSection>
        <EditorSection />
      </S.EditorSection>
    </BasedTemplate>
  );
}

export default PostEdit;
