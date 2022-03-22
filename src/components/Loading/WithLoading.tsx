import React, { useEffect, useState } from 'react';

import { ReactComponent as Loading } from 'assets/loading-spinner.svg';

type Props = {
  main: JSX.Element;
  requestApi: () => void;
};

const WithLoading = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const Component = props.main;

  useEffect(() => {
    props.requestApi();
  }, []);

  return <>{isLoading ? <Loading /> : Component}</>;
};

export default WithLoading;
