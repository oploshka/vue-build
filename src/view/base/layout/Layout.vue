<template>
  <DialogCore/>
  <component :is="currentLayout" id="app" />
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

<style>

#app {
  height: 100%;
  width: 100%;
}

</style>
