<template>
  <nav class="navbar  navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">{{title}}</router-link>

      <div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="display: flex; flex-direction: row;">
          <!--<li class="nav-item dropdown">-->
          <!--  <span class="nav-link dropdown-toggle">Примеры форм</span>-->
          <!--  <ul class="dropdown-menu">-->
          <!--    &lt;!&ndash;<li><router-link class="dropdown-item" :to="{name: 'UserLogin'}">Авторизации</router-link></li>&ndash;&gt;-->
          <!--    &lt;!&ndash;<li><router-link class="dropdown-item" :to="{name: 'UserRegistration'}">Регистрация</router-link></li>&ndash;&gt;-->
          <!--    &lt;!&ndash;<li><router-link class="dropdown-item" :to="{name: 'UserProfileEdit'}">Профиль</router-link></li>&ndash;&gt;-->
          <!--  </ul>-->
          <!--</li>-->
          <!--<li class="nav-item">-->
          <!--</li>-->

          <!--<li class="nav-item dropdown">-->
          <!--  <span class="nav-link dropdown-toggle">UIkit</span>-->
          <!--  <ul class="dropdown-menu">-->
              <!--<li><router-link class="dropdown-item" :to="{name: 'uikit-text'}">Text</router-link></li>-->
              <!--<li><router-link class="dropdown-item" :to="{name: 'uikit-select'}">Select</router-link></li>-->
              <!--<li><router-link class="dropdown-item" :to="{name: 'uikit-date'}">Date & Time</router-link></li>-->
              <!--<li><router-link class="dropdown-item" :to="{name: 'uikit-switch'}">Switch</router-link></li>-->
          <!--  </ul>-->
          <!--</li>-->
          <!--
          <li class="nav-item dropdown">
            <span class="nav-link dropdown-toggle">Dropdown</span>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          -->

          <li class="nav-item">
            <router-link class="nav-link " to="/">Примеры</router-link>
          </li>
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
  position: absolute;
  z-index: 1;
  right: 0;
}
nav.navbar .dropdown:hover > .dropdown-menu {
  display: block;
}
</style>
