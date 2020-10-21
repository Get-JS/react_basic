import React from 'react';
import { ButtonGroup } from './styled-modules/Counter';
import Button from 'components/atoms/Button';

function Counter(props) {
  const { number } = props;
  const { onIncrease, onDecrease } = props;
  const { onIncreaseAsync, onDecreaseAsync } = props;
  const { onIncreaseSagaAsync, onDecreaseSagaAsync } = props;

  return (
    <>
      <h2>{number}</h2>
      <ButtonGroup>
        <Button onClick={onIncrease}>+1</Button>
        <Button onClick={onIncreaseAsync}>+1(Thunk-Async)</Button>
        <Button onClick={onIncreaseSagaAsync}>+1(Saga-Async)</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={onDecrease}>-1</Button>
        <Button onClick={onDecreaseAsync}>-1(Thunk-Async)</Button>
        <Button onClick={onDecreaseSagaAsync}>-1(Saga-Async)</Button>
      </ButtonGroup>
    </>
  );
}

export default Counter;
