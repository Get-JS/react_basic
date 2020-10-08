/**
 * * 회원가입 또는 로그인 폼
 */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  AuthFormBlock,
  StyledInput,
  Footer,
  ButtonWithMarginTop,
  ErrorMessage,
} from './styled-component/AuthForm';

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = TEXT_MAP[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '1rem' }}>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

const TEXT_MAP = {
  login: '로그인',
  register: '회원가입',
};
export default AuthForm;
