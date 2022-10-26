
import { reactive } from 'vue';

import {getDefaultAnonymousPermission, getUserAuthHomePage, updateReactivePermission} from './AuthPermissionHelper';

const permission = reactive(getDefaultAnonymousPermission());

export default {
  methods: {
    //
    access(permissionName) {
      // TODO: add admin and env fix
      // admin role view all page
      if(permissionName !== 'ANONYMOUS' && permission['admin']) {
        return true;
      }
      //
      return !!permission[permissionName];
    },

    getAuthRedirectPage() {
      return getUserAuthHomePage(permission);
    }
  },
  //
  update(token, tokenInfo, permissionObj) {
    updateReactivePermission(permission, permissionObj);
  },
};
