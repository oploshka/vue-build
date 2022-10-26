<template>
  <div v-if="access">
    <slot/>
  </div>
</template>

<script>

export default {
  name: 'PermissionLinkBlock',
  props: ['to'],
  computed: {
    access() {
      console.log(this.$router);
      // TODO: this.$router.match - не работает во vue 3
      const routeInfo = this.$router.match(this.to);
      return this.$user.access(routeInfo.meta.permissionV2);
    },
  },
};
</script>
