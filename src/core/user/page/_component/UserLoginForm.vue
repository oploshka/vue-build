<template>
  <FveForm class="form-auth form-base card">


      <div class="form-group">
        <FveLogin
          :field="field.login"
          label="Имя пользователя или Email"
          placeholder="Введите данные"
        />
      </div>

      <div class="form-group">
        <FvePassword
          :field="field.password"
          label="Пароль"
          placeholder="Введите данные"
        />
      </div>


      <div class="form-group" style="margin-top: 16px;">
        <div class="th-btn th-btn-primary"  @click="submit">Войти</div>
        <router-link :to="{name: $routeName.USER_PASSWORD_RECOVERY}" class="form-group-link pointer">
          Забыли пароль?
        </router-link>
<!--        <a class="form-group-link pointer" >Забыли пароль?</a>-->
      </div>

  </FveForm>
</template>

<script>

import FveMixinForm    from 'vue-form-element/src/Mixin/FveMixinForm';

import FveLogin        from '@field/Text/FveLogin';
import FvePassword     from '@field/Text/FvePasswordShowPass';

export default {
  name: 'UserLoginForm',
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
      };
    },

    setError(text) {
      for(let key in this.formElement) {
        const formElement =  this.formElement[key];
        if(formElement.field.name === 'login') {
          formElement.fieldSetError('ERROR', text, 'ERROR_CODE')
        }
        if(formElement.field.name === 'password') {
          formElement.fieldSetError('ERROR', '', 'ERROR_CODE')
        }
      }
    }
  },

};

</script>

<style lang="scss" scoped>

.card {
  gap: 24px;
  display: flex;
  flex-direction: column
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0;

  &-link {
    text-align: center;
    color: #26ADE4;
    font-size: 14px;
  }
}

.form-group-container {
  background: #F7F9FB;
  border-radius: 8px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
}

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
