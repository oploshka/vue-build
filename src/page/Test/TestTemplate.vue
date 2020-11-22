<template>
  <div>
    {{ item.id }} - {{ item.name }}
  </div>
</template>

<script>
export default {
  props: {
    item: { required: true },
  }
};
</script>
