import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/atoms/Button/';
import Input from 'components/atoms/Input/';

LoginForm.propTypes = {
  form: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  form: {},
};

function LoginForm(props) {
  const { form, onChange, onSubmit } = props;
  return (
    <>
      <h3>로그인</h3>
      <form onSubmit={onSubmit}>
        <Input autoComplete="email" name="email" placeholder="이메일" onChange={onChange} value={form.email} />

        <Input
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />

        <Button cyan fullWidth style={{ marginTop: '1rem' }}>
          로그인
        </Button>
      </form>
    </>
  );
}
export default LoginForm;
