<template>
  <!-- Vue 3 не мержит div#app -->
  <DialogCore/>
  <component :is="currentLayout" />
</template>

<script>

import DialogCore from 'vue-dlg/src/DialogCore';
import LayoutMixin from '@core/layout/mixin/LayoutMixin.vue';

export default {
  name: 'Layout',
  components: {
    DialogCore,
  },
  mixins: [LayoutMixin],
};
</script>

<style scoped lang="scss">


</style>
