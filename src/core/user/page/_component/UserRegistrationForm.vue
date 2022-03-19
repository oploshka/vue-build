<template>
  <FveForm class="form-auth form-base row">
    <div class="form-group">
      <FveText
        :field="field.login"
        label="Login"
        placeholder="Login"
        caption="Login will be used for email@zombty.com"
      />
    </div>
    <div class="form-group">
      <FveEmail
          :field="field.email"
          label="E-mail"
          placeholder="name@mail.com"
      />
    </div>
    <div class="form-group">
      <FvePassword
        :field="field.password"
        label="Password"
        placeholder="6+ Characters"
      />
    </div>
    <div class="form-group">
      <!-- <router-link :to="{name: $routerName.USER_AUTH}" class="auth__remember-password">Забыли пароль?</router-link> -->
      <button type="button" @click="submit" class="pl-btn auth__btn">Get started</button>
    </div>
  </FveForm>
</template>

<script>

import FveMixinForm    from '@fve/Mixin/FveMixinForm';

import FveText         from "@fve/Element/Text/FveText";
import FveEmail        from '@fve/Element/Text/FveEmail';
import FvePassword     from '@fve/Element/Text/FvePasswordShowPass';

export default {
  name: "UserRegistrationForm",
  mixins: [
    FveMixinForm
  ],
  components: {
    FveText,
    FveEmail,
    FvePassword,
  },
  methods: {
    submit() {
      const formSubmitPromise = this.formSubmit();
      formSubmitPromise.then(
          (formData) => {
            this.$emit('submit', formData);
          },
          (formFieldError) => {
            this.$emit('error', formFieldError);
          }
      );
    },
    formSchema() {
      return {
        login: {
          type: String,
          default() { return ''; },
          field: {
            required: true,
          }
        },
        email: {
          type: String,
          default() { return ''; },
          field: {
            required: true,
          }
        },
        password: {
          type: String,
          default: () => { return ''; },
          field: {
            required: true,
          }
        },
        // cert: {
        //   type: File,
        //   default: () => { return null; }
        // },
        // remember: {
        //   type: Boolean,
        //   default: () => { return true; }
        // },
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
.auth__btn {
  width: 100%;
  border-radius: 8px;
  background-color: var(--color-primary);
  color: #fff;
  padding: 12px 24px;
  border: 0;
  cursor: pointer;
  line-height: 24px;
  font-size: 16px;
  transition: 0.25s ease;
  &:hover {
    background-color: #F98D5F;
  }
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
