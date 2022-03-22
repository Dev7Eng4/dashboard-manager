import React, { useMemo, useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';

import UpdateInformation from 'components/User/UpdateInformation';
import UpdatePassword from 'components/User/UpdatePassword';

import './profile.scss';

type KeyTab = 'information' | 'passsword';

const Profile = () => {
  const [tab, setTab] = useState('information');

  const renderTabContent = useMemo(() => {
    switch (tab) {
      case 'password':
        return <UpdatePassword />;
      default:
        return <UpdateInformation />;
    }
  }, [tab]);

  return (
    <Container fluid>
      <Tabs
        className='flex-column flex-sm-row'
        activeKey={tab}
        onSelect={(k) => setTab(k || 'information')}
      >
        <Tab eventKey='information' title='Information'>
          {/* <UpdateInformation /> */}
        </Tab>
        <Tab eventKey='password' title='Change Password'>
          {/* <UpdatePassword /> */}
        </Tab>
      </Tabs>
      {renderTabContent}
    </Container>
  );
};

export default Profile;
