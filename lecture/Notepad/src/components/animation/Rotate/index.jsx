import React from 'react';
import styled, { css } from 'styled-components';

export const S = styled.div`
  display: flex;
  ${(props) => {
    return (
      props.rotate &&
      css`
        transform: rotate(${props.rotate}deg);
      `
    );
  }};
`;

function Rotate(props) {
  const { children } = props;
  return <S {...props}>{children}</S>;
}

export default Rotate;
