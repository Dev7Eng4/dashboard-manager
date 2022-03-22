import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  show: boolean;
  title?: string;
  showCloseIcon?: boolean;
  body: string | React.ReactNode;
  footer?: React.ReactNode;
  animation?: boolean;
  classMore?: string;
  onCloseModal?: () => void;
};

const CommonModal = (props: Props) => {
  const {
    show,
    title,
    showCloseIcon = true,
    body,
    footer,
    animation = true,
    classMore = '',
    onCloseModal,
  } = props;

  return (
    <>
      <Modal
        show={show}
        animation={animation}
        className={classMore}
        onHide={() => onCloseModal && onCloseModal()}
      >
        {title && (
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
            {showCloseIcon && (
              <FontAwesomeIcon
                icon={['fas', 'times']}
                className='btn-close-modal'
                onClick={() => onCloseModal && onCloseModal()}
              />
            )}
          </Modal.Header>
        )}
        <Modal.Body>{body}</Modal.Body>
        {footer}
      </Modal>
    </>
  );
};

export default CommonModal;
