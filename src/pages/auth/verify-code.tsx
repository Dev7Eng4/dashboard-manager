import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { useAppSelector, useInterval } from 'hooks';
import { fetchSendCode, fetchVerifyCode } from 'api';
import { handleError } from 'utils/handleError';
import { setSessionJWT } from 'utils/session';
import { toast } from 'components/Global/Toast';

const defaultTimer = 59;

const VerifyCode = () => {
  const navigate = useNavigate();
  const { username, password, isRemember } = useAppSelector(
    (state) => state.auth
  );

  const [code, setCode] = useState('');
  const [time, setTime] = useState(defaultTimer);
  const [error, setError] = useState('');

  useEffect(() => {
    getCode2FA(true);
  }, []);

  useInterval(
    () => {
      setTime((prevTime) => prevTime - 1);
    },
    1000,
    !time
  );

  const getCode2FA = async (isHideToast?: boolean) => {
    try {
      const res = await fetchSendCode(username, password);
      !isHideToast && toast(true, 'Verify code was send.');
    } catch (err) {
      !isHideToast && toast(false, 'Verify code send failed!');
      console.log('err', err);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (isNaN(Number(value))) {
      return;
    }

    if (value.length <= 6) {
      setCode(value);
      setError('');
    }
  };

  const handleResetTime = () => {
    getCode2FA();
    if (!time) {
      setTime(defaultTimer);
    }
  };

  const handleVerifyCode = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetchVerifyCode(username, password, code);
      if (res) {
        setSessionJWT(res, isRemember);
        navigate('/');
      }
    } catch (err) {
      handleError(err, (e) => setError(e));
    }
  };

  return (
    <div className='container-auth'>
      <Form
        className='d-flex flex-column auth-form__verify-code'
        onSubmit={handleVerifyCode}
      >
        <h2 className='text-center'>2FA Verify</h2>
        <span className='text-left form-auth__title-description mt-5'>
          A verification code has been sent to your email. This code will valid
          for 5 minutes.
        </span>

        <InputGroup className='input-code mt-2'>
          <Form.Control
            value={code}
            onChange={handleChange}
            placeholder='6-digits code'
          />
          <span
            className={`time ${!time ? 'btn-reset' : ''}`}
            onClick={handleResetTime}
          >
            {!time ? 'Reset' : `${time}s`}
          </span>
        </InputGroup>
        <p className='error-msg'>{error}</p>

        <Button type='submit' disabled={false} className='mt-3 mb-4'>
          Verify
        </Button>
      </Form>
    </div>
  );
};

export default VerifyCode;
