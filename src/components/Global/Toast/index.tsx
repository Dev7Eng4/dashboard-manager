import React from 'react';
import { toast as toastify } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  isSuccess: boolean;
  message: string;
};

const Toast = ({ isSuccess, message }: Props) => (
  <div className="d-flex flex-column">
    <b>{isSuccess ? 'Success' : 'Failed'}</b>
    <span>{message}</span>
  </div>
);

export const toast = (isSuccess: boolean, message: string) => {
  if (isSuccess) {
    return toastify.success(<Toast isSuccess={isSuccess} message={message} />);
  }
  return toastify.error(<Toast isSuccess={isSuccess} message={message} />);
};
