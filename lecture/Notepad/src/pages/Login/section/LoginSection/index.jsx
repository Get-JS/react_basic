import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import LoginForm from '../../organism/LoiginForm';

function LoginSection() {
  return (
    <S.LoginContainer>
      <div className="logo-area">
        <Link to="/">Notepad</Link>
      </div>
      <h3>로그인</h3>
      <LoginForm />
      <div className="nav-bar">
        <Link to="/register">회원가입</Link>
      </div>
    </S.LoginContainer>
  );
}

export default LoginSection;
