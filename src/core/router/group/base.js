import * as pageName from '@router/variable';

export default [
  // home
  {
    path: "/",
    name: pageName.HOME,
    component: () => import('@pages/Base/Home'),
    meta: {
      layout: 'DEFAULT',
      auth: 'NOT_AUTH',
    },
  },
  // {
  //   path: "/dashboard",
  //   name: pageName.DASHBOARD,
  //   component: () => import('@pages/Base/Dashboard'),
  //   meta: {
  //     layout: 'DEFAULT-AUTH',
  //     auth: 'AUTH',
  //   },
  // },
];
