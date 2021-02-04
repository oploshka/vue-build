import * as pageName from '@router/variable';

export default [
  {
    path: "/auth",
    name: pageName.SMS_AUTH,
    component: () => import('@pages/Auth/Authorization'),
    meta: {
      layout: 'DEFAULT',
      auth: 'ALL',
    },
  },
];
