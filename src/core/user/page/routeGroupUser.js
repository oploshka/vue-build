import * as pageName from "@router/variable";
import {ROLE_ANONYMOUS, ROLE_AUTH} from "@permission/roleName";
import LAYOUT from "@layout/layoutName";
import {USER_PASSWORD_RECOVERY_CONFIRM} from "@router/variable";

export default [
  {
    path: '/auth',
    name: pageName.USER_AUTH,
    component: () => import('./UserLogin'),
    meta: {
      layout: LAYOUT.FULLSCREEN,
      permission: {
        [ROLE_ANONYMOUS]: true,
      },
    },
  },
  {
    path: '/registration',
    name: pageName.USER_REGISTRATION,
    component: () => import('./UserRegistration'),
    meta: {
      layout: LAYOUT.FULLSCREEN,
      permission: {
        [ROLE_ANONYMOUS]: true,
      },
    },
  },
  //
  {
    path: '/password-recovery',
    name: pageName.USER_PASSWORD_RECOVERY,
    component: () => import('./UserPasswordRecovery'),
    meta: {
      layout: LAYOUT.FULLSCREEN,
      permission: {
        [ROLE_ANONYMOUS]: true,
      },
    },
  },
  //
  {
    path: '/password-recovery-confirm',
    name: pageName.USER_PASSWORD_RECOVERY_CONFIRM,
    component: () => import('./UserPasswordRecoveryConfirm'),
    meta: {
      layout: LAYOUT.FULLSCREEN,
      permission: {
        [ROLE_ANONYMOUS]: true,
      },
    },
  },
  //
  {
    path: '/user',
    name: pageName.USER_PROFILE_VIEW,
    component: () => import('./UserProfileView'),
    meta: {
      layout: LAYOUT.DEFAULT,
      permission: {
        [ROLE_AUTH]: true,
      },
    },
  },
  //
  {
    path: '/user/edit',
    name: pageName.USER_PROFILE_EDIT,
    component: () => import('./UserProfileEdit'),
    meta: {
      layout: LAYOUT.DEFAULT,
      permission: {
        [ROLE_AUTH]: true,
      },
    },
  },
];
