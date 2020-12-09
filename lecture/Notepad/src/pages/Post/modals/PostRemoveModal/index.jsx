import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ConfirmModal from 'components/organism/ConfirmModal';
import { postAction } from 'redux/post';
import { URL_GROUP } from 'configs/links/urls';
const { removeThunk } = postAction;

function PostRemoveModal({ visible, toggle, id }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRemove = useCallback(async () => {
    try {
      await dispatch(removeThunk({ id }));
      toggle();
      history.push(`${URL_GROUP.POST_LIST}`);
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, history, toggle, id]);

  return (
    <ConfirmModal
      visible={visible}
      title="포스트 삭제"
      description="포스트를 정말 삭제하시겠습니까?"
      confirmText="삭제"
      onConfirm={handleRemove}
      onCancel={toggle}
    />
  );
}

export default PostRemoveModal;
