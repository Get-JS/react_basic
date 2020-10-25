import React from 'react';
import styled, { css } from 'styled-components';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

export const S = styled.div`
  font-size: 1.5rem;
  ${(props) =>
    props.checked &&
    css`
      color: #adb5bd;
      text-decoration: line-through;
    `}
`;

const CheckBoxIcon = (props) => {
  return <S {...props}>{props.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</S>;
};

export default CheckBoxIcon;
