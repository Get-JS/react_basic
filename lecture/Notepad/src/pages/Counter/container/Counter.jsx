import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { increase, decrease, increaseAsync, decreaseAsync, increaseSagaAsync, decreaseSagaAsync } from 'redux/counter';
import useActions from 'utils/hooks/useActions';
import Counter from 'components/organism/Counter';

function Container() {
  const number = useSelector(({ counter }) => counter.number);
  const [
    onIncrease,
    onDecrease,
    onIncreaseAsync,
    onDecreaseAsync,
    onIncreaseSagaAsync,
    onDecreaseSagaAsync,
  ] = useActions([increase, decrease, increaseAsync, decreaseAsync, increaseSagaAsync, decreaseSagaAsync], []);
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

export default memo(Container);
