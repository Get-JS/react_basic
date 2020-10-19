import React from 'react';
import { CounterTemplateBlock } from './styled-component/Counter';

function CounterTemplate(props) {
  const { children } = props;
  return <CounterTemplateBlock>{children}</CounterTemplateBlock>;
}

export default CounterTemplate;
