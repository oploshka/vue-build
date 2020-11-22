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
        this.layoutName = newLayout ?? 'default';
      }
    }
  },
  computed: {
    currentLayout () {
      if (!this.layoutName) return;
      const ln = this.layoutName;
      return () => import(/* webpackChunkName: "layout-[request]" */ `@/core/layout/template/${ln}.vue`);
    }
  }
};

</script>
