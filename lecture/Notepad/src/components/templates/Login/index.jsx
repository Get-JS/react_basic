import React from 'react';
import { LoginTemplateBlock, LoginBox } from './styled-modules/LoginTemplate';

const LoginTemplate = ({ children }) => {
  return (
    <LoginTemplateBlock>
      <LoginBox>{children}</LoginBox>
    </LoginTemplateBlock>
  );
};

export default LoginTemplate;
