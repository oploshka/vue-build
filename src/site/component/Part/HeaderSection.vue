<template>
  <header class="header">
    <div class="header-logo">
<!--      <img-->
<!--        src="/TODO/use_base64_image_for_example"-->
<!--        alt="logo"-->
<!--        class="header-logo-img"-->
<!--      />-->
    </div>
    <div class="header__menu">
      <!--<router-link :to="{ name: this.$routeName.HOME      }"></router-link>-->
    </div>
  </header>
</template>

<script>

export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  background-color: #ffffff;
  border-bottom: solid 1px rgba(160, 160, 160, 0.3);
  color: #646464;
  a {
    display: inline-block;
    padding: 15px;
    color: #646464;
    margin-left: 5px;
  }
}
</style>
