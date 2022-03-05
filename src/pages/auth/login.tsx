import React, { ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { fetchLogin } from 'api';
import { handleError } from 'utils/handleError';
import { useAppDispatch } from 'hooks';
import { login } from './redux/slice';

interface IFormInput {
  username: string;
  password: string;
  isRemember: boolean;
}

const validateSchema = yup.object({
  username: yup.string().required(''),
  password: yup.string().required(),
});

const defaultMethods = {
  phoneNumber: '',
  mail: '',
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [errorResponse, setErrorResponse] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    resolver: yupResolver(validateSchema),
    defaultValues: {
      username: '',
      password: '',
      isRemember: false,
    },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const res = await fetchLogin(data.username, data.password);
      if (res) {
        dispatch(login(data));
        navigate('/verify-code');
      }
    } catch (err) {
      handleError(err, (e) => setErrorResponse(e));
    }
  };

  return (
    <div className="container-auth">
      <Form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <h2 className="text-center">LOGIN</h2>
        <span className="text-center form-auth__title-description">
          Welcome to E-SELL admin dashboard.
        </span>

        <InputGroup>
          <InputGroup.Text>
            <FontAwesomeIcon icon={['fas', 'user-circle']} />
          </InputGroup.Text>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Form.Control
                {...field}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  field.onChange(e);
                  setErrorResponse('');
                }}
                placeholder="Username or email"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            )}
          />
        </InputGroup>
        <p className="error-msg">{errorResponse}</p>

        <InputGroup className="mt-3 mb-2 input-group__password">
          <InputGroup.Text>
            <FontAwesomeIcon icon={['fas', 'lock']} />
          </InputGroup.Text>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Form.Control
                {...field}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  field.onChange(e);
                  setErrorResponse('');
                }}
                type={`${showPassword ? 'text' : 'password'}`}
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            )}
          />
          <FontAwesomeIcon
            icon={['fas', showPassword ? 'eye' : 'eye-slash']}
            onClick={() => setShowPassword(!showPassword)}
          />
        </InputGroup>

        <Row className="mb-4 mt-2">
          <Col>
            <Controller
              name="isRemember"
              control={control}
              render={({ field }) => (
                <Form.Check
                  id="check_remember"
                  type="checkbox"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    field.onChange(e.target.checked)
                  }
                  label="Remember me"
                  checked={field.value}
                />
              )}
            />
          </Col>

          <Col className="text-end">
            <span>
              <Link to="/forgot-password">Forgot password?</Link>
            </span>
          </Col>
        </Row>

        <Button type="submit" disabled={!isValid || !!errorResponse}>
          Login
        </Button>

        <div className="d-flex my-5">
          <hr className="flex-grow-1" />
          <span className="px-3">or</span>
          <hr className="flex-grow-1" />
        </div>

        <div className="text-center diff-login">
          Log in with
          <div>
            <span>
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </span>
            <span>
              <FontAwesomeIcon icon={['fab', 'google']} />
            </span>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
