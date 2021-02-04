import * as pageName from '@router/variable';

export default [
  {
    path: "/auth",
    name: pageName.AUTH,
    component: () => import('@page/Auth/Authorization'),
    meta: {
      layout: 'DEFAULT',
      auth: 'ALL',
    },
  },
];
