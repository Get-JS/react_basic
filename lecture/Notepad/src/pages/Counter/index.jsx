import React from 'react';
import BasedTemplate from '../BasedTemplate';
import CounterTemplate from 'components/templates/Counter';
import Counter from './container/Counter';

function CounterPage(props) {
  return (
    <BasedTemplate>
      <CounterTemplate>
        <h2>Counter</h2>
        <Counter />
      </CounterTemplate>
    </BasedTemplate>
  );
}

export default CounterPage;
