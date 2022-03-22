import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import CommonModal from './CommonModal';

type Props = {
  show: boolean;
  onCloseModal: () => void;
  onConfirmModal: () => void;
};

const DiscardModal = ({ show, onCloseModal, onConfirmModal }: Props) => {
  return (
    <CommonModal
      show={show}
      title='Discard ?'
      body='Your data will be lost. Do you wish to continue ?'
      footer={
        <Modal.Footer>
          <Button className='btn-submit' onClick={onConfirmModal}>
            Yes
          </Button>

          <Button
            variant='secondary'
            className='btn-submit btn-cancel'
            onClick={onCloseModal}
          >
            No
          </Button>
        </Modal.Footer>
      }
      animation={false}
      classMore='discard-modal'
      onCloseModal={onCloseModal}
    />
  );
};

export default DiscardModal;
