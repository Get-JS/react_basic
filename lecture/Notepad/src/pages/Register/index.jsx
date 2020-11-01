import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as S from './styled';
import RegisterSection from './section/RegisterSection';
import { userSelector } from 'redux/user/slice';
import { URL_GROUP } from 'configs/links/urls';

function RegisterPage() {
  const history = useHistory();
  const { user } = useSelector(userSelector.all);

  useEffect(() => {
    if (user) history.push(URL_GROUP.HOME);
  }, [user, history]);

  return (
    <S.RegsiterTemplate>
      <S.RegisterSection>
        <RegisterSection />
      </S.RegisterSection>
    </S.RegsiterTemplate>
  );
}

export default RegisterPage;
