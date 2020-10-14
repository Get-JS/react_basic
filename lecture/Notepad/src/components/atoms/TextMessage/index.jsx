import React from 'react';
import styled from 'styled-components';
import palette from 'utils/styles/palette';

const S = styled.div`
  color: ${(props) => {
    if (props?.color in palette) return palette[props.color];
    else return props?.color;
  }};
  text-align: ${(props) => {
    return props.align || 'center';
  }};
  font-size: 0.875rem;
  margin-top: 0.3rem;
`;

const TextMessage = (props) => {
  return <S {...props} />;
};

export default TextMessage;
