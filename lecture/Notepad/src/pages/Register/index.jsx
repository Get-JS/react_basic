import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as S from './styled';
import RegisterSection from './section/RegisterSection';
import { userSelector } from 'redux/user';
import { alertAction } from 'redux/alert';
import { URL_GROUP } from 'configs/links/urls';

const { setAlertState } = alertAction;

function RegisterPage() {
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
  }, [user, done, history]);

  return (
    <S.RegsiterTemplate>
      <S.RegisterSection>
        <RegisterSection />
      </S.RegisterSection>
    </S.RegsiterTemplate>
  );
}

export default RegisterPage;
