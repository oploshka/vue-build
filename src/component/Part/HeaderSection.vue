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
      <router-link :to="{ name: this.$routeName.HOME      }">Главная</router-link>
      <router-link :to="{ name: this.$routeName.ABOUT     }">О нас</router-link>
      <router-link :to="{ name: this.$routeName.CONTACT   }">Контакты</router-link>
      <router-link :to="{ name: this.$routeName.NOT_FOUND }">404</router-link>
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
  height: 80px;
  width: 100%;
  background: #2C3242;
  color: #D3D3D3;
  a {
    color: #D3D3D3;
    margin-left: 5px;
  }
}
</style>
