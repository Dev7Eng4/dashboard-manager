import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import Home from '../pages/home';

interface Props extends RouteProps {
  component: React.FunctionComponent<Record<string, unknown>>;
}

const PublicRoute = ({ component: Component, ...rest }: Props) => {
  const isAuthenticated = false;
  return (
    <Route {...rest} element={isAuthenticated ? <Home /> : <Component />} />
  );
};

export default PublicRoute;
