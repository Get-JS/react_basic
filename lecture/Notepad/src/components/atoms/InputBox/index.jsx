import React, { forwardRef } from 'react';
import styled from 'styled-components';
import palette from 'utils/styles/palette';

const S = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: '#495057';
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid;
  border-color: ${(props) => {
    if (props?.color in palette) return palette[props.color];
    else return '#ced4da';
  }};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const InputBox = (props, ref) => {
  return <S {...props} ref={ref} />;
};

export default forwardRef(InputBox);
