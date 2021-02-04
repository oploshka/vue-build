<template>
  <div style="display: block;">
    <Header />
    <router-view style="min-height: calc( 100vh - 160px );"/>
    <Footer />
  </div>
</template>

<script>
import Header from "@component/Part/Header";
import Footer from "@component/Part/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>

</style>
