<template>
  <UserTemplate>
    <div :class="{'login-card': step === 'RECOVERY'}">
      <!-- :formData="{login: 'testUser', password: 'testPassword'}" -->
      <template v-if="step === 'RECOVERY'">
        <h1 class="auth__title title">Восстановление пароля</h1>

        <div class="auth__main">
          <UserRecoveryForm @submit="recoverySubmitForm" />
        </div>
      </template>
      <template v-else-if="step === 'RECOVERY_CONFIRM'">
        <h1 class="auth__title title">Письмо отправлено</h1>

        <div class="auth__main">
          <UserRecoveryConfirmForm />
        </div>
      </template>

      <div class="auth__bottom">
        <!--<router-link :to="{ name: $routeName.USER_PASSWORD_RECOVERY }" class="auth__link">Forgot password</router-link>-->
      </div>
    </div>
  </UserTemplate>

</template>

<script>
  import UserTemplate from '@user/page/_component/UserTemplate';
  import UserRecoveryForm from '@user/page/_component/UserRecoveryForm';
  import UserRecoveryConfirmForm from '@user/page/_component/UserRecoveryConfirmForm';

  export default {
    name: 'UserRecovery',
    components: {
      UserRecoveryForm,
      UserTemplate,
      UserRecoveryConfirmForm
    },
    data() {
      return {
        step: 'RECOVERY',
        stepData: {},
      };
    },
    methods: {
      setStep(stepName, stepData = {}) {
        this.step = stepName;
        this.stepData = stepData;
      },

      async recoverySubmitForm({mail}) {
        try {
          // await RequestManager.Recovery.recovery({
          //   mail,
          // });
          console.warn(`Для восстановления учетной записи использован следующая почта: ${mail}.
     Необходимо добавить метод`);
          this.setStep('RECOVERY_CONFIRM');
        } catch (e) {
          console.error(e);
          this.$dialog.notify.error(e.message);
        }
      }
    }
  };
</script>

<style lang="scss">
  @import "./userStyle";

  .login-card {
    background: #FFFFFF;
    box-shadow: 0 4px 8px rgba(28, 41, 61, 0.1);
    border-radius: 8px;
    padding: 24px 43px;
    border: 1px solid #E7E8EA;
  }
</style>
