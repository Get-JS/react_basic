import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalAction, modalSelector } from '../slice';
const { openModal, closeModal } = modalAction;

function useOpenModal(key) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => modalSelector.isOpen(state, key));
  const toggleModal = useCallback(() => {
    if (isOpen) dispatch(closeModal(key));
    else dispatch(openModal(key));
  }, [dispatch, isOpen, key]);

  return { isOpen, toggleModal };
}

export default useOpenModal;
