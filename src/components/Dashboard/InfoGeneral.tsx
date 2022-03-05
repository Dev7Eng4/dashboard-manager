import React from 'react';

import CardDetail from 'components/Card/Card';

const mock = [
  {
    totalNumber: '1,504',
    txtSub: 'Daily views',
    icon: ['fas', 'eye'],
  },
  {
    totalNumber: '15,504',
    txtSub: 'Sales',
    icon: ['fas', 'eye'],
  },
  {
    totalNumber: '504',
    txtSub: 'Comments',
    icon: ['fas', 'eye'],
  },
  {
    totalNumber: '$1,000,504',
    txtSub: 'Earning',
    icon: ['fas', 'eye'],
  },
];

const InfoGeneral = () => {
  return (
    <div>
      {mock.map((item) => (
        <div key={item.txtSub}>
          <CardDetail {...item} />
        </div>
      ))}
    </div>
  );
};

export default InfoGeneral;
