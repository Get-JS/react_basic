import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import ConfirmModal from '../ConfirmModal';
import { URL_GROUP } from 'configs/links/urls';

function RedirectModal({ visible, toggle }) {
  const history = useHistory();
  const handleConfirm = () => {
    toggle();
    history.push(URL_GROUP.HOME);
  };

  return (
    <ConfirmModal
      visible={visible}
      title="알림"
      description="로그인 중에는 이용 불가능 합니다."
      confirmText="확인"
      onConfirm={handleConfirm}
    />
  );
}

export default memo(RedirectModal);
