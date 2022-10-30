<template>
  <div class="loading-page-template">
    <template v-if="loadingStatus === 'LOADING' || loadingStatus === 'INIT'">
      <LoadingView/>
    </template>
    <!--<template v-if="loadingStatus === 'SUCCESS'">-->
    <!--  <LoadingView/>-->
    <!--</template>-->
    <template v-if="loadingStatus === 'ERROR'">
      <slot name="error">
        <div class="tab-cont-center">Произошла ошибка при загрузке данных</div>
      </slot>
    </template>
    <template v-if="loadingStatus === 'SUCCESS'">
      <slot name="success">
        <slot/>
      </slot>
    </template>
  </div>
</template>

<script>

import LoadingView from '@loading/component/LoadingView';

export default {
  name: 'LoadingBlock',
  components: {
    LoadingView,
  },
  props: {
    loadingStatus: {type: String, required: true }
  },
};

</script>

<style scoped lang="scss">

.loading-page-template {
  width: 100%;
  height: 100%;
}

</style>
