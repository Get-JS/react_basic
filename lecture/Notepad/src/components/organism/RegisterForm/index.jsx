import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/atoms/Button/';
import TextMessage from 'components/atoms/TextMessage/';
import InputBox from 'components/atoms/InputBox';
import FormGroup from 'components/templates/FormGroup/index';

RegisterForm.propTypes = {
  form: PropTypes.object,
  validation: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
  form: {
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
  },
  validation: {},
};

function RegisterForm(props) {
  const { form, onChange, onSubmit, validation, isSubmitEnable } = props;
  return (
    <>
      <h3>회원가입</h3>
      <form onSubmit={onSubmit}>
        <FormGroup>
          <InputBox
            autoComplete="email"
            name="email"
            placeholder="이메일"
            onChange={onChange}
            value={form.email}
            color={validation.email.status}
          />
          {validation.email && (
            <TextMessage status={validation.email.status} color={validation.email.status}>
              {validation.email.msg}
            </TextMessage>
          )}
        </FormGroup>
        <FormGroup>
          <InputBox
            autoComplete="username"
            name="username"
            placeholder="이름"
            onChange={onChange}
            value={form.username}
            color={validation.username.status}
          />
          {validation.username && (
            <TextMessage status={validation.username.status} color={validation.username.status}>
              {validation.username.msg}
            </TextMessage>
          )}
        </FormGroup>
        <FormGroup>
          <InputBox
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={onChange}
            value={form.password}
            color={validation.password.status}
          />
          {validation.password && (
            <TextMessage status={validation.password.status} color={validation.password.status}>
              {validation.password.msg}
            </TextMessage>
          )}
        </FormGroup>
        <FormGroup>
          <InputBox
            autoComplete="new-passwordConfirm"
            name="passwordConfirm"
            placeholder="비밀번호확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
            color={validation.passwordConfirm.status}
          />
          {validation.passwordConfirm && (
            <TextMessage status={validation.passwordConfirm.status} color={validation.passwordConfirm.status}>
              {validation.passwordConfirm.msg}
            </TextMessage>
          )}
        </FormGroup>

        <Button cyan fullWidth style={{ marginTop: '1rem' }} disabled={!isSubmitEnable}>
          회원가입
        </Button>
      </form>
    </>
  );
}

export default RegisterForm;
