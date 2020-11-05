import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as S from './styled';
import LoginSection from './section/LoginSection';
import { userSelector } from 'redux/user';
import { alertAction } from 'redux/alert';
import { URL_GROUP } from 'configs/links/urls';

const { setAlertState } = alertAction;

function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector(userSelector.all);
  const { done } = useSelector(userSelector.loginFetch);

  useEffect(() => {
    if (user) {
      dispatch(
        setAlertState({
          type: 'alert',
          title: '알림',
          icon: 'warning',
          text: '로그인 중에는 이용 불가능 합니다.',
          pendingConfirmationAction: () => {
            history.push(URL_GROUP.HOME);
          },
        }),
      );
    } else if (done) {
      history.push(URL_GROUP.HOME);
    }
  }, [dispatch, user, done, history]);

  return (
    <S.LoginTemplate>
      <S.LoginSection>
        <LoginSection />
      </S.LoginSection>
    </S.LoginTemplate>
  );
}

export default LoginPage;
