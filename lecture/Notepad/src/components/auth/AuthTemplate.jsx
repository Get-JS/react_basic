/**
 * * 회원가입 / 로그인 페이지의 레이아웃을 담당하는 컴포넌트
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { AuthTemplateBlock, WhiteBox } from './styled-component/AuthTemplate';

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">Notepad</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
