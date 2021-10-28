<template>
  <routerLink v-if="access" v-bind="$props"><slot/></routerLink>
</template>

<script>

import {ROLE_ANONYMOUS, ROLE_AUTH} from "@permission/roleName";

export default {
  props: ['to'],
  computed: {
    access() {

      const routeInfo = this.$router.match(this.to);
      if(!routeInfo.meta.permission){
        return true;
      }

      // get access
      let permission = {};
      let p2 = routeInfo.meta.permission;
      for (var i = 0; i < p2.length; ++i){
        permission[p2[i]] = true;
      }

      let userRoleList = global.User.isAuth() ? [ROLE_AUTH] : [ROLE_ANONYMOUS];
      userRoleList = userRoleList.concat(global.User.Role.getRoleList());

      let access = false;

      for (let i = 0; i < userRoleList.length; i++){
        let roleName = userRoleList[i];

        if(Object.prototype.hasOwnProperty.call(permission, roleName) && permission[roleName]){
          access = true;
          break;
        }
      }

      return access;
    },
  },
};
</script>
