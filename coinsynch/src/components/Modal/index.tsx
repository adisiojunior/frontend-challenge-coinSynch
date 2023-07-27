import React from 'react';
import ReactModal from 'react-modal';
import {
  ModalContent,
  Form,
  CloseButton,
  InputWithIcon,
  ShowPasswordIcon,
} from './styles';

interface ModalProps {
  children: any;
  isOpen: boolean;
  onRequestClose: () => void;
}

const Modal = ({ isOpen, onRequestClose, children }: ModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <ModalContent>{children}</ModalContent>
    </ReactModal>
  );
};

export default Modal;
