import React from 'react';
import styled from 'styled-components';

const S = styled.div`
  color: ${(props) => props.color};
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const TextMessage = (props) => {
  return <S {...props} />;
};

export default TextMessage;
