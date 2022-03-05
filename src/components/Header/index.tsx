import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getFullName } from 'utils/transferData';
import { Theme } from 'hooks/useDarkMode';

import { UserResponse } from 'api/types/User';

type Props = {
  user: UserResponse;
  theme: Theme;
  onChangeTheme: () => void;
  onToggleNavbar: () => void;
};

const Header = ({ user, theme, onChangeTheme, onToggleNavbar }: Props) => {
  const renderAvatar = () => {
    const first = user.firstName?.slice(0, 1);
    const last = user.lastName.slice(0, 1);

    if (!first && !last) {
      return '';
    }

    return `${first} ${last}`.trim().toLocaleUpperCase();
  };

  return (
    <header className="d-flex custom-theme">
      <FontAwesomeIcon icon={['fas', 'bars']} onClick={onToggleNavbar} />

      <span className="dark-mode">
        {theme === 'light' ? (
          <FontAwesomeIcon icon={['fas', 'sun']} onClick={onChangeTheme} />
        ) : (
          <FontAwesomeIcon
            icon={['fas', 'moon']}
            className="text-warning"
            onClick={onChangeTheme}
          />
        )}
      </span>

      <span className="notification">
        <FontAwesomeIcon icon={['fas', 'bell']} />
        <span className="notification-count">4</span>
      </span>

      <span className="account">
        <span className="account-avatar">{renderAvatar()}</span>
        <span className="account-name">{getFullName(user)}</span>
      </span>
    </header>
  );
};

export default Header;
