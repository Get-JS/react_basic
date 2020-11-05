import React from 'react';
import BasedTemplate from 'components/templates/BasedTemplate';
import { CouterSection } from './styled';
import CounterBox from './organism/CounterBox';

function ThunkSagaPage() {
  return (
    <BasedTemplate contentTitle={'Thunk & Saga Page'}>
      <CouterSection>
        <CounterBox />
      </CouterSection>
    </BasedTemplate>
  );
}

export default ThunkSagaPage;
