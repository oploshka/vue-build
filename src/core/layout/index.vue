<template>
  <div>
    <component :is="currentLayout" id="app" :class="getGridClass"/>
  </div>
</template>

<script>
  // import grid from '@/core/layout/mixin/grid';
  import layoutTemplate from '@/core/layout/mixin/vue-extend-layout';
  // import LoadingBar from '@/component/Widget/LoadingBar';

  export default {
    name: 'layout-default',
    mixins: [
      // grid,
      layoutTemplate
    ],
    // components: {
    //   LoadingBar,
    // },
    // mounted () {
    // created () {
    //   document.body.classList.add('bg-light');
    // },
    // destroyed () {
    //   document.body.classList.remove('bg-light');
    // }
  };
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
}
</style>
