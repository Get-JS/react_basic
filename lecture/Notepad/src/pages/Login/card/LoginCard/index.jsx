import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import LoginForm from './LoiginForm';
import { URL_GROUP } from 'configs/links/urls';

function LoginCard() {
  return (
    <S.LoginContainer>
      <div className="logo-area">
        <Link to={URL_GROUP.HOME}>Notepad</Link>
      </div>
      <h3>로그인</h3>
      <LoginForm />
      <div className="nav-bar">
        <Link to={URL_GROUP.REGISTER}>회원가입</Link>
      </div>
    </S.LoginContainer>
  );
}

export default LoginCard;
