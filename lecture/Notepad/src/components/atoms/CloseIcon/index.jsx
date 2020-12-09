import React from 'react';
import styled from 'styled-components';
import { MdRemoveCircleOutline } from 'react-icons/md';

export const S = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;

  &:hover {
    color: #ff8787;
  }
`;

const CloseIcon = (props) => {
  return (
    <S {...props}>
      <MdRemoveCircleOutline />
    </S>
  );
};

export default CloseIcon;
