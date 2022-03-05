import React from 'react';
import Select from 'react-select';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';

import './index.scss';

export interface OptionSelect {
  value: string;
  label: string;
}

interface Props extends Omit<StateManagerProps, 'onChange'> {
  options: OptionSelect[];
  onChange: any;
}

const SelectFilter = (props: Props) => {
  const { options, ...rest } = props;

  return (
    <Select
      options={options}
      isSearchable={false}
      className='custom-select'
      classNamePrefix='react-select'
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: '#fcd535',
          primary50: '#f2f2f2',
          primary25: '#f2f2f2',
        },
      })}
      {...rest}
    />
  );
};

export default SelectFilter;
