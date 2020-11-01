import React, { forwardRef } from 'react';
import styled from 'styled-components';
import palette from 'utils/styles/palette';

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
`;

const Input = (props, ref) => {
  return <S {...props} ref={ref} />;
};

export default forwardRef(Input);
