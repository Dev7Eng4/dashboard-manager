import React from 'react';
import { Route, RouteProps, useNavigate } from 'react-router-dom';

interface Props extends RouteProps {
  component: React.FunctionComponent<Record<string, unknown>>;
}

const PrivateRoute = ({ component: Component, ...rest }: Props) => {
  const navigate = useNavigate();

  const isAuthenticated = false;

  if (!isAuthenticated) {
    navigate('/login');
  }
  return <Route {...rest} element={<Component />} />;
};

export default PrivateRoute;
