import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const initialValues = {
  username: '',
  firstName: '',
  lastName: '',
  mail: '',
  phoneNumber: '',
  role: '',
  birthOfDate: '',
  address: {
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
  },
};

const UpdateInformation = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: initialValues,
    mode: 'all',
  });

  return (
    <Form className='d-flex flex-column mt-5'>
      <div className='avatar'>
        <img
          src='https://scr.vn/wp-content/uploads/2020/08/%E1%BA%A2nh-hot-girl-l%C3%A0m-avt.jpg'
          alt='Avatar'
        />
        <span className='btn-upload'>
          <FontAwesomeIcon icon={['fas', 'camera']} />
        </span>
      </div>

      <h2>Account Information</h2>
      <Row>
        <Col sm={12} md={6}>
          <Form.Group>
            <Form.Label>
              Username <b className='symbol-require'>*</b>
            </Form.Label>
            <Controller
              name='username'
              control={control}
              render={({ field }) => <Form.Control {...field} />}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group>
            <Form.Label>
              Password <b className='symbol-require'>*</b>
            </Form.Label>
            <Controller
              name='username'
              control={control}
              render={({ field }) => <Form.Control {...field} />}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Form.Group>
          <Form.Label className='d-block'>Contact Options</Form.Label>
          <Form.Check
            inline
            label='Mail'
            name='contact'
            type='radio'
            id='mail'
          />
          <Form.Check
            inline
            label='Message'
            name='contact'
            type='radio'
            id='phone'
          />
        </Form.Group>
      </Row>

      <h2>Personal Information</h2>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>First Name </Form.Label>
            <Controller
              name='username'
              control={control}
              render={({ field }) => <Form.Control {...field} />}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Controller
              name='username'
              control={control}
              render={({ field }) => <Form.Control {...field} />}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col sm={12} md={6}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Controller
              name='username'
              control={control}
              render={({ field }) => <Form.Control {...field} />}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Controller
              name='username'
              control={control}
              render={({ field }) => <Form.Control {...field} />}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <Form.Group>
            <Form.Label>Address Line 1</Form.Label>
            <Controller
              name='username'
              control={control}
              render={({ field }) => <Form.Control {...field} />}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Address Line 2</Form.Label>
            <Controller
              name='username'
              control={control}
              render={({ field }) => <Form.Control {...field} />}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <Form.Group>
            <Form.Label>Postcode</Form.Label>
            <Controller
              name='username'
              control={control}
              render={({ field }) => <Form.Control {...field} />}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Controller
              name='username'
              control={control}
              render={({ field }) => <Form.Control {...field} />}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <Form.Group>
            <Form.Label>State</Form.Label>
            <Controller
              name='username'
              control={control}
              render={({ field }) => <Form.Control {...field} />}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Country</Form.Label>
            <Controller
              name='username'
              control={control}
              render={({ field }) => <Form.Control {...field} />}
            />
          </Form.Group>
        </Col>
      </Row>

      <Button className='d-block ms-auto btn-submit mt-5'>Save Changes</Button>
    </Form>
  );
};

export default UpdateInformation;
