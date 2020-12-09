import React from 'react';
import styled, { css } from 'styled-components';

export const S = styled.div`
  z-index: 1000;
  ${(props) =>
    props.visiable
      ? css`
          visibility: visible;
          transform: translate(0, 5px);
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `};

  transition: all ease 0.4s 0s;

  &&:before {
    transform: translate(0, -5px);
  }
`;

function Popover(props) {
  return <S {...props} />;
}

export default Popover;
