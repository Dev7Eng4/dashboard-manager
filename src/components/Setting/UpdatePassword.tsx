import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

type FormInput = typeof initalValues;

const initalValues = {
  currentPasswrod: '',
  password: '',
  confirmPassword: '',
};

const UpdatePassword = () => {
  const { control, handleSubmit } = useForm<FormInput>({
    defaultValues: initalValues,
    mode: 'all',
  });

  const onSubmit: SubmitHandler<FormInput> = (values) => {
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className='mb-3 align-items-center'>
        <Col md={4}>
          <Form.Label className='my-2'>
            Current password <b className='symbol-require'>*</b>
          </Form.Label>
        </Col>
        <Col md={8}>
          <Controller
            name='currentPasswrod'
            control={control}
            render={({ field }) => <Form.Control {...field} />}
          />
        </Col>
      </Row>

      <Row className='mb-3 align-items-center'>
        <Col md={4}>
          <Form.Label className='my-2'>
            New password <b className='symbol-require'>*</b>
          </Form.Label>
        </Col>
        <Col md={8}>
          <Controller
            name='password'
            control={control}
            render={({ field }) => <Form.Control {...field} />}
          />
        </Col>
      </Row>

      <Row className='mb-5 align-items-center'>
        <Col md={4}>
          <Form.Label className='my-2'>
            Confirm password <b className='symbol-require'>*</b>
          </Form.Label>
        </Col>
        <Col md={8}>
          <Controller
            name='confirmPassword'
            control={control}
            render={({ field }) => <Form.Control {...field} />}
          />
        </Col>
      </Row>
      <Button className='d-block ms-auto btn-submit'>Save Changes</Button>
    </Form>
  );
};

export default UpdatePassword;
