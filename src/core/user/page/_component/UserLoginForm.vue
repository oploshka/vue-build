<template>
  <form class="form-auth form-base row" @submit="formSubmit"  @submit.prevent="formSubmit">
    <div class="col-12">
      <FveLogin
        label="Логин"
        name="login"
        v-model="form.login"
        @keypress-enter="formSubmit"
      />
    </div>
    <div class="col-12">
      <FvePassword
        label="Пароль"
        name="password"
        v-model="form.password"
        @keypress-enter="formSubmit"
      />
    </div>
    <div class="col-12">
      <!-- <router-link :to="{name: $routerName.AUTH}" class="auth-form__remember-password">Забыли пароль?</router-link> -->
      <button type="button" @click="formSubmit" class="pl-btn auth-form__btn">ВОЙТИ</button>
    </div>
  </form>
</template>

<script>

import FveMixinForm    from '@fve/Mixin/FveMixinForm';

import FveLogin        from '@fve/Element/Text/FveLogin';
import FvePassword     from '@fve/Element/Text/FvePassword';

export default {
  mixins: [
    FveMixinForm
  ],
  components: {
    FveLogin,
    FvePassword,
  },
  methods: {
    formSchema() {
      return {
        login: {
          type: String,
          default: () => { return ''; }
        },
        password: {
          type: String,
          default: () => { return ''; }
        },
        cert: {
          type: File,
          default: () => { return null; }
        },
        remember: {
          type: Boolean,
          default: () => { return true; }
        },
      };
    },
  }

};

</script>

<style lang="scss" scoped>

.auth__add-info {
  // display: flex;
  // justify-content: space-between;
  margin-bottom: 43px;
}
.auth-form__btn {
  width: 100%;
}

// checkbox
.checkbox {
  display: none;
}

.checkbox__text {
  display: inline-block;
  margin-left: 35px;
  font-size: 14px;
  line-height: 18px;
  color: #15131f;
}

.checkbox + .checkbox__label::before {
  content: "";
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 22px;
  height: 22px;

  background: var(--color-main);
  box-shadow: 0px 4px 30px 2px rgba(0, 0, 0, 0.01);
  border-radius: 5px;
}

.checkbox:checked + .checkbox__label::before {
  content: "✓";
  color: #ffffff;
}
</style>
