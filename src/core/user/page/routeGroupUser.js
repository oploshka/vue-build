import * as pageName from '@router/variable';
import LAYOUT from '@layout/LayoutName';
import * as PERMISSION from '@permission/Permission';

export default [
  {
    path: '/auth',
    name: pageName.USER_AUTH,
    component: () => import('./UserLogin'),
    meta: {
      layout: LAYOUT.FULLSCREEN,
      permissionV2: PERMISSION.ANONYMOUS,
    },
  },
  {
    path: '/recovery',
    name: pageName.USER_PASSWORD_RECOVERY,
    component: () => import('./UserRecovery'),
    meta: {
      layout: LAYOUT.FULLSCREEN,
      permissionV2: PERMISSION.ANONYMOUS,
    },
  },
];
