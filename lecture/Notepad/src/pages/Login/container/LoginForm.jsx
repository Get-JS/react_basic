import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, login } from 'redux/user/action';
import LoginForm from 'components/organism/LoiginForm/';

function Container() {
  const { form } = useSelector(({ user }) => ({
    form: user.login,
    user: user.user,
  }));
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        formType: 'login',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    dispatch(login({ email, password }));
  };

  return <LoginForm form={form} onChange={onChange} onSubmit={onSubmit} />;
}

export default Container;
