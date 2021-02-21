<script>
/*
<template>
  <component :is="currentLayout"/>
</template>
* */

export default {
  name: 'VueExtendLayout2',
  data () {
    return {
      layoutName: 'default'
    };
  },
  watch: {
    '$route': {
      immediate: true,
      handler (route) {
        const newLayout = route.meta.layout;
        // TODO: use parent meta params

        // if (!newLayout && !this.$route.name) { this.layoutName = this.loading; return; }
        // if (!newLayout) { this.layoutName = this.layout || 'default'; return; }
        // this.layoutName = newLayout;
        //
        this.layoutName = newLayout ? newLayout.toLowerCase() : 'default';
      }
    }
  },
  computed: {
    currentLayout () {
      if (!this.layoutName) return;
      const ln = this.layoutName;
      return () => import(/* webpackChunkName: "layout-[request]" */ `@layout/template/${ln}.vue`);
    }
  }
};

</script>
