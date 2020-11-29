import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as S from './styled';
import RegisterCard from './card/RegisterCard';
import { userSelector } from 'redux/user';
import { alertAction } from 'redux/alert';
import { URL_GROUP } from 'configs/links/urls';
const { setAlertState } = alertAction;

function RegisterPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { checkToken } = useSelector(userSelector.all);

  useEffect(() => {
    if (checkToken) {
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
    }
  }, [dispatch, checkToken, history]);

  return (
    <S.RegsiterTemplate>
      <S.RegisterSection>
        <RegisterCard />
      </S.RegisterSection>
    </S.RegsiterTemplate>
  );
}

export default RegisterPage;
