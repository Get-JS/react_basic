import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import RegisterForm from './RegisterForm';
import { URL_GROUP } from 'configs/links/urls';

function RegisetrCard() {
  return (
    <S.Container>
      <div className="logo-area">
        <Link to={URL_GROUP.HOME}>Notepad</Link>
      </div>
      <h3>회원가입</h3>
      <RegisterForm />
      <div className="nav-bar">
        <Link to={URL_GROUP.LOGIN}>로그인</Link>
      </div>
    </S.Container>
  );
}

export default RegisetrCard;
