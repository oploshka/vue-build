<template>
  <template v-if="table.data.loadingStatus === 'LOADING'">
    <LoadingView />
  </template>
  <template v-if="table.data.loadingStatus === 'ERROR'">
    <UiTableErrorDataList />
  </template>
  <template v-if="table.data.loadingStatus === 'SUCCESS'">
    <template v-if="table.data.totalCount">
      <slot/>
    </template>
    <template v-else>
      <UiTableEmptySearchList />
    </template>
  </template>
</template>

<script>
import UiTableEmptySearchList from '@component/UiTable/UiTableEmptySearchList';
import UiTableErrorDataList from '@component/UiTable/UiTableErrorDataList';
import LoadingView from '@loading/component/LoadingView';

export default {
  name: 'LoadingTableTemplate',
  components: {
    LoadingView,
    UiTableEmptySearchList,
    UiTableErrorDataList
  },
  props: {
    table: { type: Object, required: true },
  },
};

</script>

<style scoped lang="scss">

</style>
