import * as pageName from '@router/variable';

export default [
  {
    path: "/",
    name: pageName.HOME,
    component: () => import('@page/Base/Home'),
    meta: {
      layout: 'DEFAULT',
      auth: 'NOT_AUTH',
    },
  },
  {
    path: "/about",
    name: pageName.ABOUT,
    component: () => import('@page/Base/About'),
    meta: {
      layout: 'DEFAULT',
      auth: 'NOT_AUTH',
    },
  },
  {
    path: "/contact",
    name: pageName.CONTACT,
    component: () => import('@page/Base/Contact'),
    meta: {
      layout: 'DEFAULT',
      auth: 'NOT_AUTH',
    },
  }
];
