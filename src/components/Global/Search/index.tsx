import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormControl, FormGroup } from 'react-bootstrap';

import './index.scss';

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

const Search = (props: Props) => {
  const { value, onChange, placeholder = '' } = props;

  return (
    <FormGroup className='search-with-icon'>
      <FormControl
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label='Search'
        aria-describedby='basic-search'
      />
      <FontAwesomeIcon icon={['fas', 'search']} />
    </FormGroup>
  );
};

export default Search;
