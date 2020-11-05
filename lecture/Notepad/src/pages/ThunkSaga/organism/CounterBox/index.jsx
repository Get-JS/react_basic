import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CounterContainer, ButtonWrapper } from './styled';
import Button from 'components/atoms/Button';
import { counterAction, counterSelector } from 'redux/counter';

const { increase, increaseAsync, increaseSaga, decrease, decreaseSaga, decreaseAsync } = counterAction;

function CounterBox() {
  const dispatch = useDispatch();
  const { number } = useSelector(counterSelector.all);

  return (
    <CounterContainer>
      <h2>{number}</h2>
      <ButtonWrapper>
        <Button onClick={() => dispatch(increase())}>+1</Button>
        <Button onClick={() => dispatch(increaseAsync())}>+1(Thunk-Async)</Button>
        <Button onClick={() => dispatch(increaseSaga())}>+1(Saga-Async)</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button onClick={() => dispatch(decrease())}>-1</Button>
        <Button onClick={() => dispatch(decreaseSaga())}>-1(Thunk-Async)</Button>
        <Button onClick={() => dispatch(decreaseAsync())}>-1(Saga-Async)</Button>
      </ButtonWrapper>
    </CounterContainer>
  );
}

export default CounterBox;
