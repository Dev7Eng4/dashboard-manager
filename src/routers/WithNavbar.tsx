import React, { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Navbar from 'components/Navbar';
import PrivateRoute from './PrivateRoute';
import PageNotFound from 'pages/404';
import Header from 'components/Header';

import { useAppSelector } from 'hooks';

import { Theme } from 'hooks/useDarkMode';

const Home = React.lazy(() => import('pages/home'));
const SettingUser = React.lazy(() => import('pages/settingUser'));
const ListUser = React.lazy(() => import('pages/users'));

type Props = {
  theme: Theme;
  onChangeTheme: () => void;
};

const WithNavbar = ({ theme, onChangeTheme }: Props) => {
  const { user } = useAppSelector((state) => state.auth);

  const [openNavbar, setOpenNavbar] = useState(false);

  const handleToggleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <>
      <Row className='g-0'>
        <Navbar openNavbar={openNavbar} onToggleNavbar={handleToggleNavbar} />
        <Col className='container-content--right'>
          <Header
            user={user}
            theme={theme}
            onChangeTheme={onChangeTheme}
            onToggleNavbar={handleToggleNavbar}
          />
          <main>
            <Suspense fallback={<p>Loading...</p>}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users' element={<ListUser />} />
                <Route path='/settings/me' element={<SettingUser />} />
                <Route path='*' element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </main>
        </Col>
      </Row>
    </>
  );
};

export default WithNavbar;
