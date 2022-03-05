import { NavBarItem } from '.';

export const navbars: NavBarItem[] = [
  {
    innerText: 'Dashboard',
    leftIcon: ['fas', 'home'],
    route: '/dashboard',
  },
  {
    innerText: 'Invoice',
    leftIcon: ['fas', 'home'],
    route: '/invoice',
  },
  {
    innerText: 'Dashbard',
    leftIcon: ['fas', 'home'],
    route: '/test',
  },
  {
    innerText: 'Dashboad',
    leftIcon: ['fas', 'sign-out-alt'],
    route: '/demo',
  },
  {
    innerText: 'Users',
    leftIcon: ['fas', 'users'],
    subLinks: [
      {
        innerText: 'Me',
        route: '/settings/me',
      },
      {
        innerText: 'All Users',
        route: '/users',
      },
    ],
  },
  {
    innerText: 'Support',
    leftIcon: ['fas', 'user-cog'],
    route: '/ashboard',
  },
];
