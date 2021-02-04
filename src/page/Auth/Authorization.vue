<template>
  <div class="auth">
    <h1 class="auth__title">Вход в систему</h1>
    <LoginForm
      @submit="loginFormSubmit"
    />
  </div>
</template>

<script>

import LoginForm from "@components/Page/Auth/LoginForm";

export default {
  name: "Authorization",
  components: {
    LoginForm,
  },
  methods: {
    loginFormSubmit(form){
      this.authBase(form.login, form.password);
    },

    async authBase(login, password) {

      this.$store.dispatch('auth', { smsCode: smsCode })
        .then(() => {
          if (this.$store.getters.isAuth) {
            this.$router.go();
          }
        })
        .catch((e) => {
          this.$dialogs.alert(e?.response?.data?.error || e);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
