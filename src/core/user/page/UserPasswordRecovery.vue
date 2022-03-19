<template>
  <UserTemplate :imgSrc="require('@img/cover-password-recovery.png')">
    <div>
      <template v-if="step === 'RECOVERY_PASSWORD'">
        <h1 class="auth__title">Recovery Password</h1>
        <div class="auth__main">
          <UserPasswordRecoveryForm
              @submit="passwordRecoverySubmit"
          />
        </div>
        <div class="auth__bottom">
          <router-link :to="{ name: $routeName.USER_AUTH }" class="auth__link">Back</router-link>
        </div>
      </template>
      <template v-else>
        <h1 class="auth__title">Password reset</h1>
        <div class="auth__main">
          <p class="auth__text">Recovery link has been sent to your additional email.</p>
          <router-link class="auth__btn" :to="{ name: $routeName.USER_AUTH }">Back to log in</router-link>
        </div>
      </template>
    </div>
  </UserTemplate>
</template>

<script>

import UserTemplate from "@user/page/_component/UserTemplate";
import UserPasswordRecoveryForm from "@user/page/_component/UserPasswordRecoveryForm";

export default {
  name: "UserPasswordRecovery",
  components: {
    UserTemplate,
    UserPasswordRecoveryForm,
  },
  data() {
    return {
      step: 'RECOVERY_PASSWORD', // RECOVERY_PASSWORD, RECOVERY_PASSWORD_SUCCESS
      stepData: {},
    };
  },
  methods: {

    setStep(stepName, stepData = {}) {
      this.step = stepName;
      this.stepData = stepData;
    },

    passwordRecoverySubmit() {
      console.warn('Recovery pass!');
      this.setStep('RECOVERY_PASSWORD_SUCCESS');
    }
  }
};


</script>

<style lang="scss" scoped>
@import "./userStyle";
</style>
