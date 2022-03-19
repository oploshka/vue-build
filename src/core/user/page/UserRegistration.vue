<template>
  <UserTemplate :imgSrc="require('@img/cover-registration.png')">
    <div>
      <h1 class="auth__title">Sign Up</h1>
      <p class="auth__subtitle"> Already a member?
        <router-link :to="{ name: $routeName.USER_AUTH }" class="auth__link">Log in</router-link>
      </p>
      <div class="auth__main">
        <UserRegistrationForm
            @submit="registrationFormSubmit"
        />
      </div>
      <div class="auth__bottom">
        <router-link :to="{ name: $routeName.HOME }" class="auth__link">Privacy policy</router-link>
        and
        <router-link :to="{ name: $routeName.HOME }" class="auth__link">Terms of Service</router-link>
        apply
      </div>
    </div>
  </UserTemplate>
</template>

<script>

import UserTemplate from "@user/page/_component/UserTemplate";
import UserRegistrationForm from "@user/page/_component/UserRegistrationForm";

export default {
  name: "UserRegistration",
  components: {
    UserTemplate,
    UserRegistrationForm,
  },
  methods: {
    /**
     * Пока что это написано топорно, но работает
     *
     * @param {Object} data
     * @param {String} data.login:    "test"
     * @param {String} data.email:    "test@mail.ru"
     * @param {String} data.password: "123456"
     *
     * @returns {Promise<void>}
     */
    async registrationFormSubmit(data) {
      
      try {
        let user = {
          mail    : data.email,
          login   : data.login,
          password: data.password,
        }
        let res = await RequestManager.Auth.registrationStep1GetKey();
        let res2 = await RequestManager.Auth.registration({user: user, token: res.access_token });
  
        this.$dialog.notify('Успешно', 'Вы зарегистрированы');
        this.$router.push({name: this.$routeName.USER_AUTH});
      } catch (e) {
        this.$dialog.notify('Ошибка', e.message);
      }
    }
  }
};

</script>

<style lang="scss" scoped>
@import "./userStyle";
</style>
