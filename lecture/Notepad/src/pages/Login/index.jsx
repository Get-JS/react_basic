import React from 'react';
import { Link } from 'react-router-dom';
import LoginTemplate from 'components/templates/Login/';
import LoginForm from './container/LoginForm';

function LoginPage() {
  return (
    <LoginTemplate>
      <div className="logo-area">
        <Link to="/">Notepad</Link>
      </div>
      <LoginForm />
      <div className="nav-bar">
        <Link to="/register">회원가입</Link>
      </div>
    </LoginTemplate>
  );
}

export default LoginPage;
