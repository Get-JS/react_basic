import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from './styled';
import LoginCard from './card/LoginCard';
import RedirectModal from 'components/organism/RedirectModal';
import { useOpenModal, REDIRECT_MODAL } from 'redux/modal';
import { userSelector } from 'redux/user';

function LoginPage() {
  const { checkToken } = useSelector(userSelector.all);
  const { isOpen, toggleModal } = useOpenModal(REDIRECT_MODAL);

  useEffect(() => {
    if (checkToken) toggleModal();
  }, [checkToken]);

  return (
    <S.LoginTemplate>
      <S.LoginSection>
        <LoginCard />
      </S.LoginSection>
      {isOpen && <RedirectModal visible={isOpen} toggle={toggleModal} />}
    </S.LoginTemplate>
  );
}

export default LoginPage;
