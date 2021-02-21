<template>
  <div v-if="access">
    <slot />
  </div>
</template>

<script>

import permission from "@permission";

export default {
  props: {
    name: {
      type: String,
      required: true
    },
  },
  computed: {
    access() {
      return permission.access(this.name);
    },
  },
}
</script>
