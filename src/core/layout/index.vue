<template>
  <component :is="currentLayout" id="app" />
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
    mounted() {
      // магическая штука для отключения лоадинга
      document.onreadystatechange = () => {
        if (document.readyState == "complete") {
          document.body.className = document.body.className.replace("loading","");
        }
      };
    },
  };
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
}
</style>
