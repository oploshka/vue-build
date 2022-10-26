<template>
  <div class="layout-default">
    <HeaderPart title="VUE BUILD"/>
  
    <div class="layout-default-main">
      <template v-if="routerPageLoading">
        <div style="width: 100%; height: 100%; padding: 10px;"><LoadingView/></div>
      </template>
      <template v-else>
        <router-view />
      </template>
    </div>
  
    <FooterPart/>
  </div>
</template>

<script>

import HeaderPart from '@part/HeaderPart';
import FooterPart from '@part/FooterPart';

// TODO: fix
import {routerPageLoading} from '@core/router/router.store';
import LoadingView from '@loading/component/LoadingView';

export default {
  name: 'LayoutDefault',
  components: {
    HeaderPart,
    FooterPart,
    //
    LoadingView,
  },
  computed: {
    routerPageLoading() {
      return routerPageLoading.value;
    }
  },
};

</script>

<style lang="scss" scoped>

.layout-default {
  width: 100%;
  height: 100%;
}
.layout-default-main {
  min-height: 100%;
  min-height: calc(100% - 80px);
  padding: 80px 0 50px 0;
}

</style>
