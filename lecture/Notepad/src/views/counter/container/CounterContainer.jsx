import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import Counter from '../component/Counter';
import {
  increase,
  decrease,
  increaseAsync,
  decreaseAsync,
  increaseSagaAsync,
  decreaseSagaAsync,
} from '../../../modules/counter';
import useActions from '../../../lib/hooks/useActions';

function CounterContainer() {
  const number = useSelector(({ counter }) => counter.number);
  const [
    onIncrease,
    onDecrease,
    onIncreaseAsync,
    onDecreaseAsync,
    onIncreaseSagaAsync,
    onDecreaseSagaAsync,
  ] = useActions(
    [
      increase,
      decrease,
      increaseAsync,
      decreaseAsync,
      increaseSagaAsync,
      decreaseSagaAsync,
    ],
    [],
  );
  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseAsync={onIncreaseAsync}
      onDecreaseAsync={onDecreaseAsync}
      onIncreaseSagaAsync={onIncreaseSagaAsync}
      onDecreaseSagaAsync={onDecreaseSagaAsync}
    />
  );
}

export default memo(CounterContainer);
