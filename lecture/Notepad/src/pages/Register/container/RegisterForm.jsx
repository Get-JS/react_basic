import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { registerValidation, changeField, register } from 'redux/user/action';
import validationObj from 'utils/validation/register';

import RegisterForm from 'components/organism/RegisterForm/';

function registerCheck(key, value, form) {
  let checkObj = {};
  if (key === 'password') checkObj = validationObj[key](value, form.passwordConfirm);
  if (key === 'passwordConfirm') checkObj = validationObj[key](form.password, value);
  else checkObj = validationObj[key](value);
  return checkObj;
}

function Container() {
  const { form, validation } = useSelector(({ user }) => ({
    form: user.register,
    validation: user.register.validation,
  }));
  const dispatch = useDispatch();

  const [isSubmitEnable, setSubmitEnable] = useState(false);

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        formType: 'register',
        key: name,
        value,
      }),
    );
    const checkObj = registerCheck(name, value, form);
    let status = 'success';
    if (checkObj.check) status = 'warning';
    if (checkObj.msg === validation[name].msg) return;
    dispatch(registerValidation({ key: name, check: checkObj.check, status, msg: checkObj.msg }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, username, password } = form;
    dispatch(register({ sign_up_type: 'normal', email, username, password }));
  };

  useEffect(() => {
    const checkArr = Object.keys(validation).filter((key) => validation[key]['check']);
    if (checkArr.length) setSubmitEnable(false);
    else setSubmitEnable(true);
  }, [validation]);

  return (
    <RegisterForm
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      validation={validation}
      isSubmitEnable={isSubmitEnable}
    />
  );
}

export default Container;
