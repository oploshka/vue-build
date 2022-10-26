<template>
  <template v-if="loadingStatus === 'LOADING'">
    <LoadingView/>
  </template>
  <template v-if="loadingStatus === 'ERROR'">
    <div class="tab-cont-center">Произошла ошибка при загрузке данных</div>
  </template>
  <template v-if="loadingStatus === 'EMPTY'">
    <div class="tab-cont-center">нет данных</div>
  </template>
  <template v-if="loadingStatus === 'SUCCESS'">
    <slot/>
  </template>
</template>

<script>

import LoadingView from '@loading/component/LoadingView';

export default {
  name: 'LoadingPageListBlock',
  components: {
    LoadingView,
  },
  computed: {
    loadingStatus() {
      const parentComponent = this.$parent.$parent;
      if(parentComponent.loadingPage.status !== 'SUCCESS') {
        return parentComponent.loadingPage.status;
      }

      if(parentComponent.response.totalCount) {
        return 'SUCCESS';
      }

      // TODO: сбросить фильтр
      return 'EMPTY';
    }
  }
};

</script>

<style scoped lang="scss">

.tab-cont-center {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  color: #A4B0B5;

  padding: 40px 0;
}

</style>
