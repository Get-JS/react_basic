import React from 'react';
import * as S from './styled';

function ConfirmModal({ visible, title, description, confirmText = '확인', cancelText = '취소', onConfirm, onCancel }) {
  if (!visible) return null;
  return (
    <S.Container>
      <S.Wrapper>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
          {onCancel && <S.StyledButton onClick={onCancel}>{cancelText}</S.StyledButton>}
          {onConfirm && (
            <S.StyledButton cyan onClick={onConfirm}>
              {confirmText}
            </S.StyledButton>
          )}
        </div>
      </S.Wrapper>
    </S.Container>
  );
}

export default ConfirmModal;
