<template>
  <div>
    <div v-for="route in $routeName" :key="route">
      <router-link :to="{name: route}">{{route}}</router-link>
    </div>
  </div>
</template>

<script>

export default {

};

</script>

<style lang="scss" scoped>
</style>
