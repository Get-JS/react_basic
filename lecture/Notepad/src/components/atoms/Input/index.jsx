import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';

export const S = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Input = (props) => {
  return <S {...props} />;
};

export default Input;
