import React from 'react';
import { Link } from 'react-router-dom';
// import {
//   AuthFormBlock,
//   Footer,
//   ButtonWithMarginTop,
//   ErrorMessage,
// } from './styled-component/AuthForm';
import Input from 'components/atoms/Input/';
import Button from 'components/atoms/Button/';

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = TEXT_MAP[type];
  return (
    <>
      <h3>{text}</h3>
    </>
  );
};

const TEXT_MAP = {
  login: '로그인',
  register: '회원가입',
};
export default AuthForm;
