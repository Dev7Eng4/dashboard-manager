import React, { ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { ErrorMessages } from 'constants/enum';
import { passwordRegex } from 'constants/regexs';

interface IFormInput {
  password: string;
  confirmPassword: string;
}

const validateSchema = yup.object({
  password: yup
    .string()
    .required(`Password ${ErrorMessages.Require}`)
    .matches(passwordRegex, ErrorMessages.FormatPassword),
});

const ResetPassword = () => {
  const navigate = useNavigate();

  const [codeIn, setCodeIn] = useState('a');

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    resolver: yupResolver(validateSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    mode: 'all',
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    // const await res
    // navigate('/');
  };

  const handleCloseModal = () => {
    setCodeIn('');
  };

  return (
    <div className="container-auth">
      <Form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <h2 className="text-center">Reset Password</h2>

        <InputGroup className="input-group__password">
          <InputGroup.Text>
            <FontAwesomeIcon icon={['fas', 'lock']} />
          </InputGroup.Text>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Form.Control
                {...field}
                type={`${showPassword ? 'text' : 'password'}`}
                placeholder="New password"
                aria-label="New password"
                aria-describedby="basic-addon1"
              />
            )}
          />
          <FontAwesomeIcon
            icon={['fas', showPassword ? 'eye' : 'eye-slash']}
            onClick={() => setShowPassword(!showPassword)}
          />
        </InputGroup>
        <p className="error-msg">{errors.password?.message}</p>

        <InputGroup className="mt-3 input-group__password">
          <InputGroup.Text>
            <FontAwesomeIcon icon={['fas', 'lock']} />
          </InputGroup.Text>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Form.Control
                {...field}
                type={`${showPassword ? 'text' : 'password'}`}
                placeholder="Confirm new password"
                aria-label="Confirm new password"
                aria-describedby="basic-addon1"
              />
            )}
          />
          <FontAwesomeIcon
            icon={['fas', showPassword ? 'eye' : 'eye-slash']}
            onClick={() => setShowPassword(!showPassword)}
          />
        </InputGroup>
        <p className="error-msg">{errors.password?.message}</p>

        <Button className="mt-3 mb-4" type="submit" disabled={!isValid}>
          Reset
        </Button>
      </Form>
    </div>
  );
};

export default ResetPassword;
