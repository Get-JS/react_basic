import { useSelector, useDispatch } from 'react-redux';
import { modalAction, modalSelector } from '../slice';
const { openModal, closeModal } = modalAction;

function useOpenModal(key) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => modalSelector.isOpen(state, key));
  const toggleModal = () => {
    if (isOpen) dispatch(closeModal(key));
    else dispatch(openModal(key));
  };
  return { isOpen, toggleModal };
}

export default useOpenModal;
