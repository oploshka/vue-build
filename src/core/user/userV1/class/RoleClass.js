
import { reactive } from 'vue';
import {ROLE_ANONYMOUS} from '@permission/_old/roleName';

const getDefault = () =>  {
  return {
    role_list : [ROLE_ANONYMOUS],
  };
};

const role = reactive(getDefault());

export default {
  store: role,
  getDefault: getDefault,
  methods: {
    getRoleList () {
      return role.role_list;
    },
    getRoleObject () {
      const userRoleObject = {};
      for (var i = 0; i < role.role_list.length; i++) {
        userRoleObject[role.role_list[i]] = true;
      }
      return userRoleObject;
    },
  },
  auth() {

  },
  logout() {
    Object.assign(role, getDefault());
  },
  init() {
  }
};
