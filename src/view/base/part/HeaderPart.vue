<template>
  <nav class="navbar  navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">{{title}}</router-link>

      <div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="display: flex; flex-direction: row;">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: $routeName.ABOUT}">ABOUT</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: $routeName.CONTACT}">CONTACT</router-link>
          </li>
          <!--
          <li class="nav-item dropdown">
            <span class="nav-link dropdown-toggle">Примеры форм</span>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" :to="{name: $routeName.HOME}">Авторизации</router-link></li>
              <li><router-link class="dropdown-item" :to="{name: $routeName.ABOUT}">Регистрация</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" :to="{name: $routeName.CONTENT}">Профиль</router-link></li>
            </ul>
          </li>
          -->
        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderPart',
  props: {
    title: String,
  }
};
</script>

<style scoped lang="scss">
.nav-item {
  padding-left: 10px;
}
.nav-link{
  cursor: pointer;
}
.nav-item.dropdown{
  position: relative;
}
.dropdown-menu {
  position: absolute !important;
  z-index: 1;
  right: 0;
}
nav.navbar .dropdown:hover > .dropdown-menu {
  display: block;
}
</style>
