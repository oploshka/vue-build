<template>
  <div style="display: block;">
    <HeaderSection />
    <router-view style="min-height: calc( 100vh - 160px );"/>
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "@component/Part/HeaderSection";
import FooterSection from "@component/Part/FooterSection";

export default {
  components: {
    HeaderSection,
    FooterSection,
  },
};
</script>

<style lang="scss" scoped>

</style>
