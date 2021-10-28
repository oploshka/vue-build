<template>
  <div v-if="access">
    <slot />
  </div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      required: true
    },
  },
  computed: {
    access() {
      return this.$user.access(this.name);
    },
  },
};
</script>
