import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import { io } from 'socket.io-client';

import PrivateRoute from './PrivateRoute';
import Login from '../pages/auth/login';
import VerifyCode from 'pages/auth/verify-code';
import WithNavbar from './WithNavbar';
import ForgotPassword from 'pages/auth/forgot-password';
import ResetPassword from 'pages/auth/reset-password';

import { useDarkMode } from 'hooks/useDarkMode';
import { setupInterceptor } from 'api/configAxios';

const AppRouter = () => {
  const navigate = useNavigate();
  // const socket = io(`${process.env.REACT_APP_API_URI}`);

  const [theme, themeToggler] = useDarkMode();

  useEffect(() => {
    setupInterceptor(navigate);
    // socket.on('connect', () => {
    //   console.log('connect from client', socket.id);
    // });
  }, []);

  if (!theme) {
    return <></>;
  }

  return (
    <Container fluid className={`${theme === 'dark' ? 'app-dark' : ''}`}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/verify-code' element={<VerifyCode />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route
          path='*'
          element={<WithNavbar theme={theme} onChangeTheme={themeToggler} />}
        />
      </Routes>

      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
};

export default AppRouter;
