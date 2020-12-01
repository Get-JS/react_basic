import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styled';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from 'components/atoms/Button';
import TextMessage from 'components/atoms/TextMessage';
import InputBox from 'components/atoms/InputBox';
import { fetchStatusSelector, LOADING } from 'redux/fetchStatus';
import { userAction } from 'redux/user';
import { URL_GROUP } from 'configs/links/urls';
import { setAccessToken } from 'utils/http/auth';
const { registerThunk, register: userRegister } = userAction;

const schema = yup.object().shape({
  email: yup.string().email('올바르지 않은 이메일 양식입니다.').required('이메일은 필수 입력입니다.'),
  username: yup.string().max(8, '8자 이내로 작성해주세요.').required('닉네임은 필수 입력입니다.'),
  password: yup.string().required('비밀번호는 필수 입력입니다.'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호 확인은 필수 입력입니다.'),
});

function RegisterForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { status } = useSelector(fetchStatusSelector.getFetchStatus(userRegister));
  const { register, handleSubmit, formState, errors } = useForm({
    defaultValues: { email: '', username: '', password: '', passwordConfirm: '' },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const handleRegister = async (data) => {
    try {
      const { email, username, password } = data;
      const { token } = await dispatch(registerThunk({ email, username, password }));
      setAccessToken(token);
      history.push(URL_GROUP.HOME);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <S.InputWrapper>
        <InputBox
          id="email"
          name="email"
          ref={register}
          placeholder="이메일"
          color={!!errors.email ? 'warning' : ''}
          defaultValue={register.email}
        />
        {!!errors.email && (
          <TextMessage status="warning" color="warning">
            {errors?.email?.message}
          </TextMessage>
        )}
      </S.InputWrapper>
      <S.InputWrapper>
        <InputBox
          id="username"
          name="username"
          ref={register}
          placeholder="이름"
          color={!!errors.username ? 'warning' : ''}
          defaultValue={register.username}
        />
        {!!errors.username && (
          <TextMessage status="warning" color="warning">
            {errors?.username?.message}
          </TextMessage>
        )}
      </S.InputWrapper>
      <S.InputWrapper>
        <InputBox
          id="password"
          name="password"
          ref={register}
          placeholder="비밀번호"
          type="password"
          defaultValue={register.password}
          color={!!errors.password ? 'warning' : ''}
        />
        {!!errors.password && (
          <TextMessage status="warning" color="warning">
            {errors?.password?.message}
          </TextMessage>
        )}
      </S.InputWrapper>
      <S.InputWrapper>
        <InputBox
          id="passwordConfirm"
          name="passwordConfirm"
          ref={register}
          placeholder="비밀번호확인"
          type="password"
          defaultValue={register.passwordConfirm}
          color={!!errors.passwordConfirm ? 'warning' : ''}
        />
        {!!errors.passwordConfirm && (
          <TextMessage status="warning" color="warning">
            {errors?.passwordConfirm?.message}
          </TextMessage>
        )}
      </S.InputWrapper>
      <Button
        type="submit"
        cyan
        fullWidth
        style={{ marginTop: '1rem' }}
        disabled={status === LOADING || !formState.isValid}
      >
        회원가입 {status === LOADING && <CircularProgress size={20} />}
      </Button>
    </form>
  );
}

export default RegisterForm;
