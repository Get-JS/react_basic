import React from 'react';
import Button from 'components/atoms/Button';

function Counter(props) {
  const { number } = props;
  const { onIncrease, onDecrease } = props;
  const { onIncreaseAsync, onDecreaseAsync } = props;
  const { onIncreaseSagaAsync, onDecreaseSagaAsync } = props;

  return (
    <>
      <h2>{number}</h2>
      <div>
        <Button onClick={onIncrease}>+1</Button>
        <Button onClick={onIncreaseAsync}>+1(Thunk-Async)</Button>
        <Button onClick={onIncreaseSagaAsync}>+1(Saga-Async)</Button>
      </div>
      <div>
        <Button onClick={onDecrease}>-1</Button>
        <Button onClick={onDecreaseAsync}>-1(Thunk-Async)</Button>
        <Button onClick={onDecreaseSagaAsync}>-1(Saga-Async)</Button>
      </div>
    </>
  );
}

export default Counter;
