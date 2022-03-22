import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getFullName, getNameAvatar } from 'utils/transferData';
import { Theme } from 'hooks/useDarkMode';

import { UserResponse } from 'api/types/User';

type Props = {
  user: UserResponse;
  theme: Theme;
  onChangeTheme: () => void;
  onToggleNavbar: () => void;
};

const Header = ({ user, theme, onChangeTheme, onToggleNavbar }: Props) => {
  return (
    <header>
      <div className='d-flex custom-theme header-container'>
        <FontAwesomeIcon icon={['fas', 'bars']} onClick={onToggleNavbar} />

        <span className='dark-mode'>
          {theme === 'light' ? (
            <FontAwesomeIcon icon={['fas', 'sun']} onClick={onChangeTheme} />
          ) : (
            <FontAwesomeIcon
              icon={['fas', 'moon']}
              className='text-warning'
              onClick={onChangeTheme}
            />
          )}
        </span>

        <span className='notification'>
          <FontAwesomeIcon icon={['fas', 'bell']} />
          <span className='notification-count'>4</span>
        </span>

        <span className='account'>
          <span className='account-avatar'>{getNameAvatar(user)}</span>
          <span className='account-name'>{getFullName(user)}</span>
        </span>
      </div>
    </header>
  );
};

export default Header;
