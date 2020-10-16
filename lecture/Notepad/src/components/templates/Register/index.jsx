import React from 'react';
import { RegisterTemplateBlock, RegisterBox } from './styled-modules/RegisterTemplate';

const LoginTemplate = ({ children }) => {
  return (
    <RegisterTemplateBlock>
      <RegisterBox>{children}</RegisterBox>
    </RegisterTemplateBlock>
  );
};

export default LoginTemplate;
