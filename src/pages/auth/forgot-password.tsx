import React, { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchFindAccount } from 'api';
import { handleError } from 'utils/handleError';

const strError = 'Username is required!';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setUsername(value);
    if (value) {
      setError('');
    }
  };

  const handleFindAccount = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetchFindAccount(username);
    } catch (err) {
      handleError(err, (e) => setError(e));
    }
  };

  return (
    <div className="container-auth">
      <Form className="d-flex flex-column" onSubmit={handleFindAccount}>
        <h2 className="text-center">Forgot Password</h2>

        <InputGroup>
          <InputGroup.Text>
            <FontAwesomeIcon icon={['fas', 'user-circle']} />
          </InputGroup.Text>
          <Form.Control
            name="username"
            placeholder="Username or email"
            value={username}
            onChange={handleChange}
          />
        </InputGroup>
        <p className="error-msg">{error}</p>

        <Button type="submit" disabled={false} className="mt-3 mb-4">
          Continue
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPassword;
