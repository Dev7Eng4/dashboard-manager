import React from 'react';
import { Button } from 'react-bootstrap';

import SelectFilter, { OptionSelect } from 'components/Global/Select';
import Search from 'components/Global/Search';

import './index.scss';

type Props = {
  searchValue: string;
  searchPlaceholder?: string;
  filterPlaceholder?: string;
  btnLabel: string;
  optionsFilter: OptionSelect[];
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterChange: (selected: OptionSelect) => void;
  onAddClick: () => void;
};

const Filter = (props: Props) => {
  const {
    searchValue,
    searchPlaceholder,
    filterPlaceholder,
    btnLabel,
    optionsFilter,
    onSearchChange,
    onFilterChange,
    onAddClick,
  } = props;

  return (
    <div className='filter-wrap'>
      <Search
        value={searchValue}
        placeholder={searchPlaceholder}
        onChange={onSearchChange}
      />
      <SelectFilter
        options={optionsFilter}
        onChange={onFilterChange}
        placeholder={filterPlaceholder}
      />
      <Button className='d-block ms-auto btn-submit' onClick={onAddClick}>
        {btnLabel}
      </Button>
    </div>
  );
};

export default Filter;
