<template>
  <DialogCore/>
  <component :is="currentLayout" id="appLayout" />
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

#app, #appLayout {
  height: 100%;
}

</style>
