import React from 'react';
import { Button } from 'react-bootstrap';

import SelectFilter, { OptionSelect } from 'components/Global/Select';
import Search from 'components/Global/Search';

import './UserFilter.scss';

type Props = {
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterChange: (selected: OptionSelect) => void;
  onAddClick: () => void;
};

const optionsFilter: OptionSelect[] = [
  { value: '', label: 'All User' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'In Active' },
];

const UserFilter = (props: Props) => {
  const { searchValue, onSearchChange, onFilterChange, onAddClick } = props;

  return (
    <div className='users-filter'>
      <Search value={searchValue} onChange={onSearchChange} />
      <SelectFilter
        options={optionsFilter}
        onChange={onFilterChange}
        placeholder='Select one value'
      />
      <Button className='d-block ms-auto btn-submit' onClick={onAddClick}>
        Add User
      </Button>
    </div>
  );
};

export default UserFilter;
