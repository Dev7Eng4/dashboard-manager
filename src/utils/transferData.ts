import { UserResponse } from 'api/types/User';

export const getFullName = (user: UserResponse) => {
  return `${user.firstName} ${user.lastName}`.trim();
};
