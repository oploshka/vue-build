<template>
  <div>
    <HeaderPart title="VUE BUILD"/>
  
    <div class="main-content container">
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

<style lang="scss">
.main-content {
  min-height: 100%;
  min-height: calc(100% - 80px);
  //padding: 100px 0 50px 0;
}
</style>
