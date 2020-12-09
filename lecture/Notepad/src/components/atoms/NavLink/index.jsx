import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette from 'utils/styles/palette';

const S = styled(NavLink)`
  color: black !important;
  padding: 0.25rem 1rem;
  outline: none;
  border: 1px solid none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  ${(props) =>
    props.fullwidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  &:hover {
    background: ${palette.gray[3]};
    border-color: ${palette.gray[8]};
  }
  &:visited {
    text-decoration: none;
  }
  &:link {
    text-decoration: none;
  }
  &.active {
    border: 2px solid #3498db;
    &:hover {
      background: ${palette.cyan[2]};
      border-color: ${palette.cyan[6]};
    }
  }
`;

function SNavLink(props) {
  return (
    <S {...props} fullwidth={props.fullwidth ? 1 : 0}>
      {props.children}
    </S>
  );
}

export default SNavLink;
