import * as permission from './permissionName';
import * as role from './roleName';

/*
role
- ROLE_ANONYMOUS
- ROLE_AUTH
- ROLE_CASHIER
- ROLE_OPERATOR
- ROLE_CASHIER_OPERATOR
 */

export default {
  // Default
  [permission.AUTH_ONLY]: {
    [role.ROLE_ANONYMOUS]: false,
    [role.ROLE_AUTH]     : true,
  },

};
