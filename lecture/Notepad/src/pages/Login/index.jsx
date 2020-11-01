import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as S from './styled';
import LoginSection from './section/LoginSection';
import { userSelector } from 'redux/user/slice';
import { URL_GROUP } from 'configs/links/urls';

function LoginPage() {
  const history = useHistory();
  const { user } = useSelector(userSelector.all);

  useEffect(() => {
    if (user) history.push(URL_GROUP.HOME);
  }, [user, history]);

  return (
    <S.LoginTemplate>
      <S.LoginSection>
        <LoginSection />
      </S.LoginSection>
    </S.LoginTemplate>
  );
}

export default LoginPage;
