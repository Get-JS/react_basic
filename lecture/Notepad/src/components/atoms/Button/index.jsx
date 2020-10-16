import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette from 'utils/styles/palette';

const Styled = css`
  color: white !important;
  padding: 0.25rem 1rem;
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${(props) => {
    if (props.disabled) {
      return css`
        background: ${palette.gray[5]};
        &:hover {
          background: ${palette.gray[4]};
        }
      `;
    } else if (props.cyan) {
      return css`
        background: ${palette.cyan[5]};
        &:hover {
          background: ${palette.cyan[4]};
        }
      `;
    } else {
      return css`
        background: ${palette.gray[8]};
        &:hover {
          background: ${palette.gray[6]};
        }
      `;
    }
  }}
`;

const S = styled.button`
  ${Styled}
`;

const SLink = styled(Link)`
  ${Styled}
`;

export const LinkButton = (props) => {
  return <SLink {...props} />;
};

const Button = (props) => {
  return <S {...props} />;
};

export default Button;
