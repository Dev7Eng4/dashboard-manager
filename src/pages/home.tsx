import React, { useEffect } from 'react';
import styled from 'styled-components';

import InfoGeneral from 'components/Dashboard/InfoGeneral';
import { axiosGet } from 'api/configAxios';

const Wrap = styled.div`
  background: ${({ theme }) => theme.background};
`;

const Home = () => {
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const res = await axiosGet('/tenant/v1');
      console.log('res', res);
    } catch (err) {
      console.log('e', err);
    }
  };

  return (
    <Wrap className="home-page">
      avkaw
      <InfoGeneral />
    </Wrap>
  );
};

export default Home;
