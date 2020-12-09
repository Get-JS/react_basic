import React from 'react';
import styled from 'styled-components';

const S = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Avatar = (props) => {
  return <S {...props} src={props.src ? props.src : 'https://www.w3schools.com/howto/img_avatar.png'} />;
};

export default Avatar;
