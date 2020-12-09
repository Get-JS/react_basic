import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from './styled';
import RegisterCard from './card/RegisterCard';
import RedirectModal from 'components/organism/RedirectModal';
import { useOpenModal, REDIRECT_MODAL } from 'redux/modal';
import { userSelector } from 'redux/user';

function RegisterPage() {
  const { checkToken } = useSelector(userSelector.all);
  const { isOpen, toggleModal } = useOpenModal(REDIRECT_MODAL);

  useEffect(() => {
    if (!isOpen && checkToken) toggleModal();
  }, [checkToken, isOpen, toggleModal]);

  return (
    <S.RegsiterTemplate>
      <S.RegisterSection>
        <RegisterCard />
      </S.RegisterSection>
      {isOpen && <RedirectModal visible={isOpen} toggle={toggleModal} />}
    </S.RegsiterTemplate>
  );
}

export default RegisterPage;
