import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { initializeForm } from 'redux/user/action';
import useAuthCheck from 'utils/hooks/useAuthCheck';

import LoginTemplate from 'components/templates/Login/';
import TextMessage from 'components/atoms/TextMessage/';
import LoginForm from './container/LoginForm';

function LoginPage() {
  useAuthCheck({});
  const [error, setError] = useState('');

  const history = useHistory();

  const { user, loginError } = useSelector(({ user }) => ({
    user: user.user,
    loginError: user.login.error,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (loginError) {
      setError(`Error: ${loginError.response.data.message}`);
    }
  }, [dispatch, loginError]);

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user]);

  return (
    <LoginTemplate>
      <div className="logo-area">
        <Link to="/">Notepad</Link>
      </div>
      <LoginForm />
      {error && <TextMessage color="warning">{error}</TextMessage>}
      <div className="nav-bar">
        <Link to="/register">회원가입</Link>
      </div>
    </LoginTemplate>
  );
}

export default LoginPage;
