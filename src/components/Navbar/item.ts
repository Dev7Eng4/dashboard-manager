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
    innerText: 'Category',
    leftIcon: ['fas', 'home'],
    route: '/categories',
  },
  {
    innerText: 'Product',
    leftIcon: ['fas', 'sign-out-alt'],
    route: '/products',
  },
  {
    innerText: 'Users',
    leftIcon: ['fas', 'users'],
    subLinks: [
      {
        innerText: 'Me',
        route: '/me',
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
