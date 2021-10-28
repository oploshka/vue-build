<template>
  <div>
      <template v-if="step === 'LOGIN'">
        <h1 class="auth__title">Вход в систему</h1>
        <UserLoginForm
          @submit="loginFormSubmit"
        />
      </template>
      <template v-else-if="step === 'SMS_CONFIRMATION'">
        <h1 class="auth__title">На ваш номер было отправлено SMS с кодом для аутентификации</h1>
        <UserSmsConfirmationForm
          @submit="smsConfirmationFormSubmit"
        />
      </template>
  </div>
</template>

<script>

// import jwtDecode from "jwt-decode";
import permissionMethod from "@permission/permissionMethod";

//
import UserLoginForm                from "@user/page/_component/UserLoginForm";
import UserSmsConfirmationForm      from "@user/page/_component/UserSmsConfirmationForm";


export default {
  name: "Authorization",
  components: {
    UserLoginForm,
    UserSmsConfirmationForm,
  },
  data() {
    return {
      step    : 'LOGIN',
      stepData: {},

      tempCertStr: null,
      tempToken  : null,
    };
  },
  // computed: {
  //   isAuthText() {
  //     return this.$user.isAuth() ? 'Авторизованный' : 'Не авторизован';
  //   },
  //   userName() {
  //     return this.$user.getName();
  //   }
  // },
  methods: {

    setStep(stepName, stepData = {}) {
      this.step     = stepName;
      this.stepData = stepData;
    },

    /**
     * @param cert
     * @throws free-form description
     * @return {Promise<string>}
     */
    async parseCert(cert) {
      let resArrayBuffer = await cert.arrayBuffer();
      let enc = new TextDecoder("utf-8");
      return enc.decode(resArrayBuffer);
    },


    //
    async _authJwt(jwt) {
      // //# OPTIONAL check access
      // const clearRoles = permissionMethod.clearRoleList(jwtObject.roles);
      // if (!clearRoles.length) {
      //   this.$dialogs.alert('В доступе отказано', {title: 'Ошибка', size: 'sm'});
      //   this.setStep('LOGIN', {});
      //   return;
      // }
      const res = this.$user.authorization(jwt);
      res && this.$router.push({ name: this.$routeName.HOME });
    },

    // //# ШАГ 1 -  авторизация
    // user action proxy
    loginFormSubmit(form){
      this.login(form); // {login, password, certStr}
    },
    //
    async login({login, password, cert}) {

      this.tempCertStr = null;
      this.tempToken   = null;

      if(cert) {
        try {
          this.tempCertStr = this.parseCert(cert);
        } catch (e) {
          // Произошла ошибка
          this.$dialogs.alert('Не удалось обработать сертификат', {title: 'Ошибка', size: 'sm'});
          return;
        }
      }

      return RequestManager.Auth.authorize({login: login, password: password}, {cert: this.tempCertStr}).then((response) => {
        if(response.secret) {
          this.setStep('SMS_CONFIRMATION', {secret: response.secret});
          return;
        }

        if(response.jwt) {
          this.tempToken = response.jwt;
          this._authJwt(response.jwt);
          return;
        }

        this.tempCertStr = null;
        this.tempToken   = null;
        this.$dialogs.alert('Не удалось авторизоваться', {title: 'Ошибка', size: 'sm'});
      });
    },


    // //# ШАГ 2 -  Смс подтверждение
    smsConfirmationFormSubmit(form){
      this.smsConfirmation({
        smsCode : form.smsCode,
        secret  : this.stepData.secret,
      });
    },
    async smsConfirmation({smsCode, secret}) {
      RequestManager.Auth.authorizeSmsConfirm({
        smsCode: smsCode,
        secret: secret
      }, {
        cert : this.tempCertStr
      }).then((response) => {
        this._authJwt(response.jwt);
      });
    },


  },
};
</script>

<style lang="scss" scoped>

.auth__title {
  margin: 0;
  margin-bottom: 50px;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #15131f;
}

</style>
