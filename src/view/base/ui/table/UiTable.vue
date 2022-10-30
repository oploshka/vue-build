<template>
  <div class="ui-table">
    <table>
      <slot/>
    </table>
  </div>
</template>

<script>

export default {
  name: 'UiTable',
};

</script>

<style scoped lang="scss">

.ui-table {
  table {
    width: 100%;
    height: 100%;
  }
}

</style>
