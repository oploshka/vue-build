<template>
  <div :class="$parent.formElementBlockClass(theme)" @click="$parent.change" style="cursor: pointer">
    <slot/>
  </div>
</template>

<script>

export default {
  props: {
    theme       : { type: String, default: '' },
  },
};
</script>
