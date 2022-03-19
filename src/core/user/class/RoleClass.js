
import { reactive } from 'vue';
import {ROLE_ANONYMOUS} from "@permission/roleName";

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
    //
    setRoleList (value) {
      role.role_list = value;
    },
  },
  logout() {
    Object.assign(role, getDefault());
  },
  init() {
  }
};


