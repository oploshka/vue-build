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
import UiTableEmptySearchList from '@ui/table/UiTableEmptySearchList';
import UiTableErrorDataList from '@ui/table/UiTableErrorDataList';
import LoadingView from '@loading/component/LoadingView';

export default {
  name: 'LoadingTable',
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
