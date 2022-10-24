<template>
  <div class="main">

    <Header class="header"/>

    <div class="content">

      <div class="sidebar-wrapper" :class="{ 'sidebar-wrapper-open': isShow }">
        <Sidebar
          @hide="isShow = false"
          @show="isShow = true"
        />
      </div>


      <div class="page-wrapper" style="overflow: hidden;">
        <template v-if="routerPageLoading">
          <div style="width: 100%; height: 100%; padding: 10px;"><LoadingView/></div>
        </template>
        <template v-else>
          <router-view class="page"/>
        </template>
      </div>

    </div>

  </div>
</template>

<script>

import Sidebar  from '@component/Part/Sidebar.vue';
import Header   from '@component/Part/Header.vue';

import {routerPageLoading} from '@router/router.store';
import LoadingView from '@loading/component/LoadingView';

export default {
  name: 'LayoutDefault',
  components: {
    Sidebar,
    Header,
    LoadingView,
  },
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    routerPageLoading() {
      return routerPageLoading.value;
    }
  }
};

</script>

<style lang="scss" scoped>

.main {
  display: flex;
  flex-direction: column;
}

.header {
  height: 88px;
}

.content {
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  padding: 0 0 0 28px;
}

.sidebar-wrapper {
  height: 100%;
  padding-bottom: 28px;
  transition: flex 1s ease;
  flex: 0 0 100px;

  &-open {
    flex: 0 0 284px;
  }
}


.page-wrapper {
  position: relative;
  display: flex;
  //height: 100%;
  //flex-direction: column;
  //overflow: hidden;
  //margin-right: 28px;
  //margin-bottom: 28px;
  margin-left: 28px;
  flex: 1 1 auto;
  height: 100%;
}

</style>
