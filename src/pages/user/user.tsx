import React, { useEffect, useRef, useState } from 'react';
import { Badge, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { OptionSelect } from 'components/Global/Select';
import TableComponent from 'components/Global/Table';
import ModalAddUser from 'components/User/AddUser/ModalAddUser';
import UserFilter from 'components/Filter';

import { getUser } from 'api';
import { avatarColors } from 'constants/colors';
import { useClosePopup } from 'hooks';
import { getNameAvatar } from 'utils/transferData';

import './user.scss';

interface Query {
  limit: number;
  offset: number;
}

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
    avatar: '',
  },
  {
    id: '2',
    firstName: 'A',
    lastName: 'b',
    username: 'demo',
    role: 'Admin',
    status: 'active',
    avatar: '',
  },
  {
    id: '3',
    firstName: 'A',
    lastName: 'b',
    username: 'demo',
    role: 'Admin',
    status: 'pending',
    avatar: '',
  },
  {
    id: '4',
    firstName: 'A',
    lastName: 'b',
    username: 'demo',
    role: 'Admin',
    status: 'active',
    avatar: '',
  },
];

const getClassStatus = (status: string) => {
  switch (status) {
    case 'active':
      return 'info';
    case 'inactive':
      return 'secondary';
    default:
      return 'warning';
  }
};

const styleAvatar = () => {
  const r = Math.floor(Math.random() * avatarColors.length);

  return avatarColors[r];
};

// let source: CancelTokenSource;
let controller: AbortController;

const optionsFilter: OptionSelect[] = [
  { value: '', label: 'All User' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'In Active' },
];

const ListUser = () => {
  const refPopup = useRef<HTMLDivElement>(null);

  const [openAddModal, setOpenAddModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [optionSelected, setOptionSelected] = useState<OptionSelect>({
    value: '',
    label: 'All User',
  });
  const [userActionSelected, setUserActionSelected] = useState('');
  const [query, setQuery] = useState<Query>({
    limit: 10,
    offset: 0,
  });
  // source = getAxiosCancel();

  useEffect(() => {
    getListUser();

    return () => {
      // if (source) {
      //   source.cancel('Cancel request');
      // }
      if (controller) {
        controller.abort();
      }
    };
  }, []);

  useClosePopup(refPopup, () => {
    console.log('oh');
    setUserActionSelected('');
  });

  const getListUser = async () => {
    try {
      if (controller) {
        controller.abort();
      }
      // source = getAxiosCancel();
      controller = new AbortController();
      const res = await getUser(controller.signal);
    } catch (err) {}
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e', e.target.value);
  };

  const handleFilterChange = (selected: OptionSelect) => {
    console.log('a', selected);
    getListUser();
    // if (source) {
    //   source = getAxiosCancel();
    //   console.log('source', source.token);
    //   source.cancel(`Cancel ${selected.value}`);
    // }
  };

  const handleAddUser = () => {
    // setOpenAddModal(true);
  };

  const handleToggleModalAction = (userId: string) => {
    if (userId === userActionSelected) {
      setUserActionSelected('');
    } else {
    }
  };

  const handlePageChange = (page: number) => {
    setQuery((prev) => ({ ...prev, offset: page - 1 }));
  };

  return (
    <Container fluid className='users-container'>
      <UserFilter
        searchValue={searchValue}
        searchPlaceholder='Search user'
        optionsFilter={optionsFilter}
        btnLabel='Add User'
        onSearchChange={handleSearchChange}
        onFilterChange={handleFilterChange}
        onAddClick={() => setOpenAddModal(true)}
      />

      <TableComponent
        columns={columns}
        rows={mock.map((item) => ({
          ...item,
          name: (
            <span className='user'>
              <span
                style={styleAvatar()}
                className='user-avatar d-flex justify-content-center align-items-center'
              >
                {item.avatar ? (
                  <img src={item.avatar} alt='Avatar User' />
                ) : (
                  // @ts-ignore
                  <>{getNameAvatar(item)}</>
                )}
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
            <div
              className='action d-inline-block'
              ref={userActionSelected === item.id ? refPopup : null}
            >
              <FontAwesomeIcon
                icon={['fas', 'ellipsis-v']}
                onClick={() => {
                  setUserActionSelected(
                    item.id === userActionSelected ? '' : item.id
                  );
                }}
              />
              <div
                className={`modal-action ${
                  userActionSelected === item.id ? 'open' : ''
                }`}
              >
                <span className='action-block'>Block</span>
                <span className='action-delete'>Delete</span>
              </div>
            </div>
          ),
        }))}
        isPagination={true}
        count={500}
        pageActive={query.offset + 1}
        rowsPerPage={10}
        onPageChange={handlePageChange}
      />

      <ModalAddUser show={openAddModal} onToggle={setOpenAddModal} />
    </Container>
  );
};

export default ListUser;
