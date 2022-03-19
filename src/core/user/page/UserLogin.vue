<template>
  <UserTemplate :imgSrc="require('@img/cover-login.png')">
    <div>
      <h1 class="auth__title">Log In</h1>
      <p class="auth__subtitle"> Don't have an account?
        <router-link :to="{ name: $routeName.USER_REGISTRATION }" class="auth__link">Sign up</router-link>
      </p>
      <template v-if="step === 'LOGIN'">
        <div class="auth__main">
          <UserLoginForm
              @submit="loginFormSubmit"
          />
        </div>
      </template>
      <template v-else-if="step === 'SMS_CONFIRMATION'">
        <h1 class="auth__title">На ваш номер было отправлено SMS с кодом для аутентификации</h1>
        <UserLoginSmsConfirmationForm
            class="auth__main"
            @submit="smsConfirmationFormSubmit"
        />
      </template>
      <div class="auth__bottom">
        <router-link :to="{ name: $routeName.USER_PASSWORD_RECOVERY }" class="auth__link">Forgot password</router-link>
      </div>
    </div>
  </UserTemplate>
</template>

<script>

// import jwtDecode from "jwt-decode";
import permissionMethod from "@permission/permissionMethod";

//
import UserLoginForm from "@user/page/_component/UserLoginForm";
import UserLoginSmsConfirmationForm from "@user/page/_component/UserLoginSmsConfirmationForm";
import UserTemplate from "@user/page/_component/UserTemplate";


export default {
  name: "Authorization",
  components: {
    UserLoginForm,
    UserLoginSmsConfirmationForm,
    UserTemplate
  },
  data() {
    return {
      step: 'LOGIN',
      stepData: {},
      tempCertStr: null,
      tempToken: null,
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
      this.step = stepName;
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
    async authorization(token) {
      const res = await this.$user.authorization({token: token});
      this.$router.push({name: this.$routeName.HOME});
    },

    // //# ШАГ 1 -  авторизация
    // user action proxy
    loginFormSubmit(form) {
      this.login(form); // {login, password, certStr}
    },
    //
    async login({login, password}) {
  
      try {
        let res2 = await RequestManager.Auth.authorization({
          login: login,
          password: password,
        });
    
        /*
        res2 =
          access_token: "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJVamgzZ1RsdGUtSFA1TGNTVmwxWVZfd3pCN013cXR0QlNQaHlubXZ3emdJIn0.eyJleHAiOjE2NDQ5NTQ1MzcsImlhdCI6MTY0NDk1NDIzNywianRpIjoiZmU1Y2EzODAtYTAzYy00YjlkLWJkM2EtNTJiMmE4NjczZDIzIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmNoYXRtYWlsLnJ0ZWxla29tLnNwYXJrbGluZ3RpZGUuZGV2L2F1dGgvcmVhbG1zL3NwYXJrbGluZ3RpZGUiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYTY2NjdhMjMtMzhjYS00ZmRkLTg5MzMtNDYzMWI4ZTllOTBiIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiY2hhdC1tYWlsLWxvY2FsaG9zdCIsInNlc3Npb25fc3RhdGUiOiIwNjJmYTczOC00MGUyLTRhODgtYWY0Zi04NjE4ZjJlYTU5OGEiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9hcGkuY2hhdG1haWwubG9jYWxob3N0Il0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLXNwYXJrbGluZ3RpZGUiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwic2lkIjoiMDYyZmE3MzgtNDBlMi00YTg4LWFmNGYtODYxOGYyZWE1OThhIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJ0ZXN0QG1haWwucnUifQ.jbIHGQoTpFR1eoawe81Da9FDUZ8d6iHuUDvEw6U1jvT-wgcplIISVauhfERIUTRF33xpkpeQ2VJAkyg8dl91pxNIEHLnKzdWiqhLr7HQgYD9wc14I01zWNHcmedJqHWxZXomfcJfCQrZt0e0VY1xpeR8HbT_NqSjSX7vWIiP6uLDdjAvA6xjFLP9wO69aqeuA1Je98_BsTfQSQRaDwKn9tjDnrrcq_E7XEydUwp-OtTx7e61EnwTVT8eVJhx5LfYcHcc6y7TXYTjCVNrWwz13eUdFes7JqbnmbaFKnGW7Y5U99yhQjVbyanGTcRfVkowbhbTl0N1EOJnfexgW4IoqA"
          expires_in: 300
          not-before-policy: 0
          refresh_expires_in: 1800
          refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIxYTE5OWJlOC00NTM5LTRiYzMtOTVjNC02NGFlOTU2M2VhZjUifQ.eyJleHAiOjE2NDQ5NTYwMzcsImlhdCI6MTY0NDk1NDIzNywianRpIjoiMTZmOGM0MGYtNmJiZS00NGI5LWE3NDQtYjcwNzlmNjY3OGI4IiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmNoYXRtYWlsLnJ0ZWxla29tLnNwYXJrbGluZ3RpZGUuZGV2L2F1dGgvcmVhbG1zL3NwYXJrbGluZ3RpZGUiLCJhdWQiOiJodHRwczovL2F1dGguY2hhdG1haWwucnRlbGVrb20uc3BhcmtsaW5ndGlkZS5kZXYvYXV0aC9yZWFsbXMvc3BhcmtsaW5ndGlkZSIsInN1YiI6ImE2NjY3YTIzLTM4Y2EtNGZkZC04OTMzLTQ2MzFiOGU5ZTkwYiIsInR5cCI6IlJlZnJlc2giLCJhenAiOiJjaGF0LW1haWwtbG9jYWxob3N0Iiwic2Vzc2lvbl9zdGF0ZSI6IjA2MmZhNzM4LTQwZTItNGE4OC1hZjRmLTg2MThmMmVhNTk4YSIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6IjA2MmZhNzM4LTQwZTItNGE4OC1hZjRmLTg2MThmMmVhNTk4YSJ9.22OS-Mq6rVWgwDORd_oEM9-9K46EP-PS7mjIVI--EQg"
          scope: "email profile"
          session_state: "062fa738-40e2-4a88-af4f-8618f2ea598a"
          token_type: "Bearer"
        */
        
        this.authorization(res2.access_token)
        // this.$dialog.notify('Успешно', 'Вы авторизовались');
        // this.$router.push({name: this.$routeName.USER_AUTH});
      } catch (e) {
        this.$dialog.notify('Не удалось авторизоваться', e.message);
      }
      
      /*
      this.tempCertStr = null;
      this.tempToken = null;

      if (cert) {
        try {
          this.tempCertStr = this.parseCert(cert);
        } catch (e) {
          // Произошла ошибка
          this.$dialogs.alert('Не удалось обработать сертификат', {title: 'Ошибка', size: 'sm'});
          return;
        }
      }

      return RequestManager.Auth.authorize({
        login: login,
        password: password
      }, {cert: this.tempCertStr}).then((response) => {
        if (response.secret) {
          this.setStep('SMS_CONFIRMATION', {secret: response.secret});
          return;
        }

        if (response.jwt) {
          this.tempToken = response.jwt;
          this._authJwt(response.jwt);
          return;
        }

        this.tempCertStr = null;
        this.tempToken = null;
        this.$dialogs.alert('Не удалось авторизоваться', {title: 'Ошибка', size: 'sm'});
      });
       */
    },


    // //# ШАГ 2 -  Смс подтверждение
    smsConfirmationFormSubmit(form) {
      this.smsConfirmation({
        smsCode: form.smsCode,
        secret: this.stepData.secret,
      });
    },
    async smsConfirmation({smsCode, secret}) {
      RequestManager.Auth.authorizeSmsConfirm({
        smsCode: smsCode,
        secret: secret
      }, {
        cert: this.tempCertStr
      }).then((response) => {
        this._authJwt(response.jwt);
      });
    },


  },
};
</script>

<style lang="scss" scoped>
@import "./userStyle";
</style>
