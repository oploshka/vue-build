<template>
  <routerLink v-if="access" v-bind="$props"><slot/></routerLink>
</template>

<script>

export default {
  props: ['to'],
  computed: {
    access() {

      const routeInfo = this.$router.match(this.to);
      if(!routeInfo.meta.permission){
        return true;
      }

      // get access
      let permission = routeInfo.meta.permission;
      let userRoleList = this.$store.getters.getUserRoleList;

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
}
</script>
