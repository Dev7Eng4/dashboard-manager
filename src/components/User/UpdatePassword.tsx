import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { ErrorMessages } from 'constants/enum';
import { passwordRegex } from 'constants/regexs';

type FormInput = typeof initalValues;

const validateSchema = yup.object({
  currentPassword: yup
    .string()
    .required(`Current password ${ErrorMessages.Require}`),
  password: yup
    .string()
    .required(`New password ${ErrorMessages.Require}`)
    .matches(passwordRegex, ErrorMessages.FormatPassword),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      'Confirm password has same with new password!'
    ),
});
const initalValues = {
  currentPassword: '',
  password: '',
  confirmPassword: '',
};

const UpdatePassword = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormInput>({
    defaultValues: initalValues,
    resolver: yupResolver(validateSchema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<FormInput> = (values) => {
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className='align-items-center'>
        <Col md={4}>
          <Form.Label className='my-0'>
            Current password <b className='symbol-require'>*</b>
          </Form.Label>
        </Col>
        <Col md={8} className='my-2'>
          <Controller
            name='currentPassword'
            control={control}
            render={({ field }) => (
              <Form.Control
                {...field}
                className={`${errors.currentPassword?.message ? 'error' : ''}`}
              />
            )}
          />
        </Col>
      </Row>
      {errors.currentPassword?.message && (
        <Row>
          <Col className='offset-md-4'>
            <p className='error-msg'>{errors.currentPassword?.message}</p>
          </Col>
        </Row>
      )}

      <Row className='mt-3 align-items-center'>
        <Col md={4}>
          <Form.Label className='my-0'>
            New password <b className='symbol-require'>*</b>
          </Form.Label>
        </Col>
        <Col md={8} className='my-2'>
          <Controller
            name='password'
            control={control}
            render={({ field }) => (
              <Form.Control
                {...field}
                className={`${errors.password?.message ? 'error' : ''}`}
              />
            )}
          />
        </Col>
      </Row>
      {errors.password?.message && (
        <Row>
          <Col className='offset-md-4'>
            <p className='error-msg'>{errors.password.message}</p>
          </Col>
        </Row>
      )}

      <Row className='mt-3 align-items-center'>
        <Col md={4}>
          <Form.Label className='my-0'>
            Confirm password <b className='symbol-require'>*</b>
          </Form.Label>
        </Col>
        <Col md={8} className='my-2'>
          <Controller
            name='confirmPassword'
            control={control}
            render={({ field }) => (
              <Form.Control
                {...field}
                className={`${errors.confirmPassword?.message ? 'error' : ''}`}
              />
            )}
          />
        </Col>
      </Row>
      {errors.confirmPassword?.message && (
        <Row>
          <Col className='offset-md-4'>
            <p className='error-msg'>{errors.confirmPassword?.message}</p>
          </Col>
        </Row>
      )}

      <Button
        type='submit'
        disabled={!isValid}
        className='mt-4 d-block ms-auto btn-submit'
      >
        Save Changes
      </Button>
    </Form>
  );
};

export default UpdatePassword;
