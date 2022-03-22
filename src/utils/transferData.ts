import { UserResponse } from 'api/types/User';

export const getFullName = (user: UserResponse) => {
  return `${user.firstName} ${user.lastName}`.trim();
};

export const getNameAvatar = (user: UserResponse) => {
  const first = user.firstName?.slice(0, 1);
  const last = user.lastName.slice(0, 1);

  if (!first && !last) {
    return '';
  }

  return `${first}${last}`.trim().toLocaleUpperCase();
};
