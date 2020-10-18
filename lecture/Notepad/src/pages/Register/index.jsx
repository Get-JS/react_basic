import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { initializeForm } from 'redux/user/action';
import useAuthCheck from 'utils/hooks/useAuthCheck';

import RegisterTemplate from 'components/templates/Register/';
import TextMessage from 'components/atoms/TextMessage/';
import RegisterForm from './container/RegisterForm';

function RegisterPage() {
  useAuthCheck({});
  const [error, setError] = useState('');

  const history = useHistory();
  const { user, registerError } = useSelector(({ user }) => ({
    user: user.user,
    registerError: user.register.error,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if (registerError) {
      setError(`Error: ${registerError.response.data.message}`);
    }
  }, [dispatch, registerError]);

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [history, user]);

  return (
    <RegisterTemplate>
      <div className="logo-area">
        <Link to="/">Notepad</Link>
      </div>
      <RegisterForm />
      {error && <TextMessage color="warning">{error}</TextMessage>}
      <div className="nav-bar">
        <Link to="/login">로그인</Link>
      </div>
    </RegisterTemplate>
  );
}

export default RegisterPage;
