import * as permission from './permissionName';
import * as role from './roleName';

export default {
  // Default
  [permission.AUTH_ONLY]: {
    [role.ROLE_ANONYMOUS]: false,
    [role.ROLE_AUTH]     : true,
  },
  [permission.ADMIN_ONLY]: {
    [role.ROLE_ADMIN]     : true,
    [role.ROLE_ANONYMOUS] : false,
    [role.ROLE_AUTH]      : false,
  },
};
