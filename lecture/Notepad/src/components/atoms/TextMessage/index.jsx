import React from 'react';
import styled from 'styled-components';
import { MdCheckCircle, MdError } from 'react-icons/md';
import palette from 'utils/styles/palette';

const S = styled.div`
  color: ${(props) => {
    if (props?.color in palette) return palette[props.color];
    else return props?.color;
  }};
  text-align: ${(props) => {
    return props.align || 'left';
  }};
  font-size: 0.875rem;
  margin-top: 0.3rem;
  height: 1rem;
`;

const MessageIcon = (props) => {
  if (props.status) {
    if (props.status === 'success') return <MdCheckCircle />;
    else if (props.status === 'warning') return <MdError />;
  } else return null;
};

const TextMessage = (props) => {
  return (
    <S {...props}>
      <MessageIcon {...props} />
      {props.children}
    </S>
  );
};

export default TextMessage;
