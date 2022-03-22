import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import CommonModal from './CommonModal';

type Props = {
  show: boolean;
  title?: string;
  body: string | React.ReactNode;
  txtConfirmButton?: string;
  txtCancelButton?: string;
  onCloseModal: () => void;
  onConfirmModal: () => void;
};

const RightModal = (props: Props) => {
  const {
    show,
    title,
    body,
    txtCancelButton = 'Cancel',
    txtConfirmButton = 'Save',
    onCloseModal,
    onConfirmModal,
  } = props;

  return (
    <CommonModal
      show={show}
      title={title}
      body={body}
      classMore='right-modal'
      footer={
        <Modal.Footer>
          <Button className='btn-submit' onClick={onConfirmModal}>
            {txtConfirmButton}
          </Button>

          <Button
            variant='secondary'
            className='btn-submit btn-cancel'
            onClick={onCloseModal}
          >
            {txtCancelButton}
          </Button>
        </Modal.Footer>
      }
      onCloseModal={onCloseModal}
    />
  );
};

export default RightModal;
