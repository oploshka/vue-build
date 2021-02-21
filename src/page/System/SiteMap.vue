<template>
  <div>
    <template v-for="rout in $routeName">
      <div :key="rout">
        <router-link :to="{name: rout}">{{rout}}</router-link>
      </div>
    </template>
  </div>
</template>

<script>

export default {

};

</script>

<style lang="scss" scoped>
</style>
