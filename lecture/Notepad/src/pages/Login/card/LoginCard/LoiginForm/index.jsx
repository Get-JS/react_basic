import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styled';
import Button from 'components/atoms/Button';
import InputBox from 'components/atoms/InputBox';
import TextMessage from 'components/atoms/TextMessage';
import { userAction } from 'redux/user/slice';
import { URL_GROUP } from 'configs/links/urls';
const { loginThunk } = userAction;

const schema = yup.object().shape({
  email: yup.string().required('이메일은 필수 입력입니다.'),
  password: yup.string().required('비밀번호는 필수 입력입니다.'),
});

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { email: '', password: '' },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const handleLogin = async (data) => {
    try {
      const { email, password } = data;
      await dispatch(loginThunk({ email, password }));
      history.push(URL_GROUP.HOME);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <S.InputWrapper>
        <InputBox id="email" name="email" ref={register} placeholder="이메일" color={!!errors.email ? 'warning' : ''} />
        {!!errors.email && (
          <TextMessage status="warning" color="warning">
            {errors?.email?.message}
          </TextMessage>
        )}
      </S.InputWrapper>

      <S.InputWrapper>
        <InputBox
          id="password"
          name="password"
          autoComplete="new-password"
          type="password"
          ref={register}
          placeholder="비밀번호"
          color={!!errors.password ? 'warning' : ''}
        />
        {!!errors.password && (
          <TextMessage status="warning" color="warning">
            {errors?.password?.message}
          </TextMessage>
        )}
      </S.InputWrapper>

      <Button type="submit" cyan fullWidth style={{ marginTop: '1rem' }}>
        로그인
      </Button>
    </form>
  );
}
export default LoginForm;
