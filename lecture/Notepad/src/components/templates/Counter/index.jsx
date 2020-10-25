import React from 'react';
import { CounterTemplateWrapper, CouterSection } from './styled-component/Counter';

function CounterTemplate(props) {
  const { children } = props;
  return (
    <CounterTemplateWrapper>
      <CouterSection>{children}</CouterSection>
    </CounterTemplateWrapper>
  );
}

export default CounterTemplate;
