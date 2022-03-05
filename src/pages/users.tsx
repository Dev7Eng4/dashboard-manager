import React, { useState } from 'react';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';

import TableComponent from 'components/Global/Table';
import Search from 'components/Global/Search';
import SelectFilter, { OptionSelect } from 'components/Global/Select';
import UserFilter from 'components/Setting/UserFilter/UserFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const columns = [
  { key: 'name', value: 'User' },
  { key: 'role', value: 'Role' },
  { key: 'status', value: 'Status' },
  { key: 'action', value: '' },
];

const mock = [
  {
    id: '1',
    firstName: 'A',
    lastName: 'b',
    username: 'demo',
    role: 'Admin',
    status: 'inactive',
  },
  {
    id: '2',
    firstName: 'A',
    lastName: 'b',
    username: 'demo',
    role: 'Admin',
    status: 'active',
  },
  {
    id: '3',
    firstName: 'A',
    lastName: 'b',
    username: 'demo',
    role: 'Admin',
    status: 'pending',
  },
  {
    id: '4',
    firstName: 'A',
    lastName: 'b',
    username: 'demo',
    role: 'Admin',
    status: 'active',
  },
];

const getClassStatus = (status: string) => {
  switch (status) {
    case 'active':
      return 'info';
    case 'inactive':
      return 'danger';
    default:
      return 'warning';
  }
};

const ListUser = () => {
  const [searchValue, setSearchValue] = useState('');
  const [optionSelected, setOptionSelected] = useState<OptionSelect>({
    value: '',
    label: 'All User',
  });
  const [userActionSelected, setUserActionSelected] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e', e.target.value);
  };

  const handleFilterChange = (selected: OptionSelect) => {
    console.log('a', selected);
  };

  const handleAddUser = () => {};

  const handleToggleModalAction = (userId: string) => {
    if (userId === userActionSelected) {
      setUserActionSelected('');
    } else {
    }
  };

  return (
    <Container fluid className='users-container'>
      <UserFilter
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onFilterChange={handleFilterChange}
        onAddClick={handleAddUser}
      />

      <TableComponent
        columns={columns}
        rows={mock.map((item) => ({
          ...item,
          name: (
            <span className='user'>
              <span className='user-avatar d-flex justify-content-center align-items-center'>
                AB
              </span>
              <span className='d-flex flex-column'>
                <strong>{item.firstName}</strong>
                <small>{item.username}</small>
              </span>
            </span>
          ),
          role: item.role,
          status: <Badge bg={getClassStatus(item.status)}>{item.status}</Badge>,
          action: (
            <span className='action'>
              <FontAwesomeIcon
                icon={['fas', 'ellipsis-v']}
                onClick={() =>
                  setUserActionSelected(
                    item.id === userActionSelected ? '' : item.id
                  )
                }
              />
              <span
                className={`modal-action ${
                  userActionSelected === item.id ? 'open' : ''
                }`}
              >
                <span className='action-block'>Block</span>
                <span className='action-delete'>Delete</span>
              </span>
            </span>
          ),
        }))}
        isPagination={true}
      />
    </Container>
  );
};

export default ListUser;
