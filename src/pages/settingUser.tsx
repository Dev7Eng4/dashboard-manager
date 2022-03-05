import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';

import UpdateInformation from 'components/Setting/UpdateInformation';
import UpdatePassword from 'components/Setting/UpdatePassword';

import './setting-user.scss';

const SettingUser = () => {
  return (
    <Container fluid>
      <Tabs className='flex-column flex-sm-row'>
        <Tab eventKey='user information' title='Information'>
          <UpdateInformation />
        </Tab>
        <Tab eventKey='change password' title='Change Password'>
          <UpdatePassword />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default SettingUser;
