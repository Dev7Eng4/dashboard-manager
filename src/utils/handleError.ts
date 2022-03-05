import { ErrorResponse } from 'api/types/Response';

export const handleError = (err: unknown, cb: (e: string) => void) => {
  const error = err as ErrorResponse;
  if (error.response?.data.message) {
    cb(error.response.data.message || '');
  }
  console.log('err', err);
};
