import React, { useMemo, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import DiscardModal from 'components/Global/Modal/DiscardModal';
import RightModal from 'components/Global/Modal/RightModal';
import SelectFilter, { OptionSelect } from 'components/Global/Select';

interface Role {}

type Props = {
  show: boolean;
  onToggle: (arg: boolean) => void;
};

type FormInput = typeof initialValues;

const optionsFilter: OptionSelect[] = [
  { value: 'admin', label: 'Admin' },
  { value: 'employee', label: 'Employee' },
  { value: 'user', label: 'User' },
];

const initialValues = {
  fullName: '',
  emailAddress: '',
  phoneNumber: '',
  role: '',
};

const ModalAddUser = ({ show, onToggle }: Props) => {
  const { handleSubmit, control } = useForm<FormInput>({
    defaultValues: initialValues,
    mode: 'all',
  });

  const [openDiscardModal, setOpenDiscardModal] = useState(false);

  const onSubmit: SubmitHandler<FormInput> = (values) => {};

  const onFilterChange = (selected: any) => {};

  const bodyModal = useMemo(() => {
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className='mb-3 align-items-center'>
          <Col>
            <Form.Label className='my-2'>
              Full Name <b className='symbol-require'>*</b>
            </Form.Label>
          </Col>
          <Col sm={12}>
            <Controller
              name='fullName'
              control={control}
              render={({ field }) => <Form.Control {...field} />}
            />
          </Col>
        </Row>

        <Row className='mb-3 align-items-center'>
          <Col>
            <Form.Label className='my-2'>Email</Form.Label>
          </Col>
          <Col sm={12}>
            <Controller
              name='emailAddress'
              control={control}
              render={({ field }) => <Form.Control {...field} />}
            />
          </Col>
        </Row>

        <Row className='mb-3 align-items-center'>
          <Col>
            <Form.Label className='my-2'>Phone Number</Form.Label>
          </Col>
          <Col sm={12}>
            <Controller
              name='phoneNumber'
              control={control}
              render={({ field }) => <Form.Control {...field} />}
            />
          </Col>
        </Row>

        <Row className='mb-3 align-items-center'>
          <Col>
            <Form.Label className='my-2'>
              Role <b className='symbol-require'>*</b>
            </Form.Label>
          </Col>
          <Col sm={12}>
            <Controller
              name='role'
              control={control}
              render={({ field }) => (
                <SelectFilter
                  options={optionsFilter}
                  onChange={onFilterChange}
                  placeholder='Select roles'
                  isMulti={true}
                />
              )}
            />
          </Col>
        </Row>
      </Form>
    );
  }, []);

  return (
    <>
      <RightModal
        show={show}
        title='Add User'
        body={bodyModal}
        txtConfirmButton='Create'
        onCloseModal={() => onToggle(false)}
        onConfirmModal={() => {}}
      />

      <DiscardModal
        show={openDiscardModal}
        onCloseModal={() => setOpenDiscardModal(false)}
        onConfirmModal={() => {}}
      />
    </>
  );
};

export default ModalAddUser;
