<template>
  <div class="layout-default">
    <div class="layout-default-header">
      <HeaderPart title="VUE BUILD"/>
    </div>
  
    <div class="layout-default-main">
      <template v-if="routerPageLoading">
        <div style="width: 100%; height: 100%; padding: 10px;"><LoadingView/></div>
      </template>
      <template v-else>
        <router-view />
      </template>
    </div>
  
    <FooterPart class="layout-default-footer"/>
  </div>
</template>

<script>

import HeaderPart from '@part/HeaderPart';
import FooterPart from '@part/FooterPart';

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
  
  display: flex;
  flex-direction: column;
}
//.layout-default-main {
//  min-height: 100%;
//  min-height: calc(100% - 80px);
//  padding: 80px 0 50px 0;
//}

//
.layout-default-header {
  flex: 0 0 auto;
  height: 70px;
  ::v-deep(>nav) { height: 70px; } 
}
.layout-default-footer {
  flex: 0 0 auto;
}
.layout-default-main {
  flex: 1 1 auto; // занять оставшуюся высоту
  //overflow: auto;
  padding-top: 32px;
  padding-bottom: 32px;
}

</style>
