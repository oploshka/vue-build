<template>
  <div>
    <span style="color: #15131F">{{ item.name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: { required: true }
  },
};
</script>
