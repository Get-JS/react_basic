import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styled';
import Button from 'components/atoms/Button';
import InputBox from 'components/atoms/InputBox';
import TextMessage from 'components/atoms/TextMessage';
import { userAction } from 'redux/user/slice';
const { login } = userAction;

const schema = yup.object().shape({
  email: yup.string().required('이메일은 필수 입력입니다.'),
  password: yup.string().required('비밀번호는 필수 입력입니다.'),
});

function LoginForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { email: '', password: '' },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { email, password } = data;
    dispatch(login({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.InputWrapper>
        <InputBox
          id="email"
          name="email"
          ref={register}
          placeholder="이메일"
          color={!!errors.email ? 'warning' : ''}
          defaultValues={register.email}
        />
        {!!errors.email && (
          <TextMessage status="warning" color="warning">
            {errors?.email?.message}
          </TextMessage>
        )}
      </S.InputWrapper>

      <S.InputWrapper>
        <InputBox
          id="email"
          name="password"
          ref={register}
          placeholder="비밀번호"
          type="password"
          color={!!errors.password ? 'warning' : ''}
          defaultValues={register.password}
        />
        {!!errors.password && (
          <TextMessage status="warning" color="warning">
            {errors?.password?.message}
          </TextMessage>
        )}
      </S.InputWrapper>

      <Button cyan fullWidth style={{ marginTop: '1rem' }}>
        로그인
      </Button>
    </form>
  );
}
export default LoginForm;
