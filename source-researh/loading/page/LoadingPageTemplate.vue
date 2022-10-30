<template>
  <div class="loading-page-template">
    <!-- div нужен так как он будет принимать класс из родительского элемента, иначе сыпятся warning -->
    <template v-if="loadingStatus === 'LOADING' || loadingStatus === 'INIT'">
      <LoadingView/>
    </template>
    <template v-if="loadingStatus === 'ERROR'">
      <div class="tab-cont-center">Произошла ошибка при загрузке данных страницы</div>
    </template>
    <template v-if="loadingStatus === 'SUCCESS'">
      <slot/>
    </template>
  </div>
</template>

<script>

import LoadingView from '@loading/component/LoadingView';

export default {
  name: 'LoadingPageTemplate',
  components: {
    LoadingView,
  },
  computed: {
    loadingStatus() {
      return this.$parent.loadingPage.status;
      // return 'LOADING';
    }
  },
};

</script>

<style scoped lang="scss">

.loading-page-template {
  width: 100%;
  height: 100%;
}

</style>
