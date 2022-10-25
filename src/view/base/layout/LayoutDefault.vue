<template>
  <div class="layout-default">
    <HeaderPart title="VUE BUILD"/>
  
    <div class="layout-default-main">
      <router-view />
    </div>
  
    <FooterPart/>
  </div>
</template>

<script>

import HeaderPart from '@part/HeaderPart';
import FooterPart from '@part/FooterPart';

export default {
  name: 'LayoutDefault',
  components: {
    HeaderPart,
    FooterPart,
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
