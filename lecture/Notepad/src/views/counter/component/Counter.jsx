import React from 'react';
import { CounterTemplate } from '../styled-component/Counter';

function Counter(props) {
  const { number, onIncrease, onDecrease } = props;
  const { onIncreaseAsync, onDecreaseAsync } = props;
  const { onIncreaseSagaAsync, onDecreaseSagaAsync } = props;
  return (
    <CounterTemplate>
      <h1 style={{ marginBottom: '15px' }}>Redux Counter</h1>
      <h2 style={{ marginBottom: '15px' }}>{number}</h2>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onIncreaseAsync}>+1(Async)</button>
        <button onClick={onIncreaseSagaAsync}>+1(Saga-Async)</button>
      </div>
      <div>
        <button onClick={onDecrease}>-1</button>
        <button onClick={onDecreaseAsync}>-1(Async)</button>
        <button onClick={onDecreaseSagaAsync}>-1(Saga-Async)</button>
      </div>
    </CounterTemplate>
  );
}

export default Counter;
