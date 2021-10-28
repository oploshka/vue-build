import * as pageName from "@router/variable";
import {ROLE_ANONYMOUS} from "@permission/roleName";

export default [
  {
    path: '/auth',
    name: pageName.AUTH,
    component: () => import('./UserLogin'), // TODO: fix
    meta: {
      layout: 'center-block',
      permission: {
        [ROLE_ANONYMOUS]: true,
      },
    },
  },
];
