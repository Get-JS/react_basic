import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increase,
  decrease,
  increaseAsync,
  decreaseAsync,
  increaseSagaAsync,
  decreaseSagaAsync,
} from 'redux/counter/action';
import { CounterContainer, ButtonWrapper } from './styled';
import Button from 'components/atoms/Button';

function CounterBox() {
  const number = useSelector(({ counter }) => counter.number);
  const dispatch = useDispatch();

  return (
    <CounterContainer>
      <h2>{number}</h2>
      <ButtonWrapper>
        <Button onClick={() => dispatch(increase())}>+1</Button>
        <Button onClick={() => dispatch(increaseAsync())}>+1(Thunk-Async)</Button>
        <Button onClick={() => dispatch(increaseSagaAsync())}>+1(Saga-Async)</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button onClick={() => dispatch(decrease())}>-1</Button>
        <Button onClick={() => dispatch(decreaseAsync())}>-1(Thunk-Async)</Button>
        <Button onClick={() => dispatch(decreaseSagaAsync())}>-1(Saga-Async)</Button>
      </ButtonWrapper>
    </CounterContainer>
  );
}

export default CounterBox;
