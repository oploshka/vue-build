<template>
  <UserTemplate :imgSrc="require('@img/cover-password-recovery-confirm.png')">
    <div>
      <h1 class="auth__title">Recovery Password</h1>
      <template v-if="step === PASSWORD_RECOVERY_CONFIRM_STEPS.NEW_PASSWORD">
        <div class="auth__main">
          <UserPasswordRecoveryConfirmForm
              @submit="passwordRecoveryConfirmSubmit"
          />
        </div>
      </template>
      <template v-else-if="step === PASSWORD_RECOVERY_CONFIRM_STEPS.NEW_PASSWORD_SUCCESS">
        <div class="auth__main">
          <p class="auth__text">Recovery link has expired.</p>
          <button
            @click="passwordRecoveryConfirmSubmit"
            type="button"
            class="pl-btn auth__btn"
          >
            Send recovery link again
          </button>
        </div>
      </template>
      <div class="auth__bottom">
        <router-link :to="{ name: $routeName.USER_AUTH }" class="auth__link">Back</router-link>
      </div>
    </div>
  </UserTemplate>
</template>

<script>
import UserTemplate from "@user/page/_component/UserTemplate";
import UserPasswordRecoveryNewPassForm from "@user/page/_component/UserPasswordRecoveryNewPassForm";

const PASSWORD_RECOVERY_CONFIRM_STEPS = {
  NEW_PASSWORD:         'NEW_PASSWORD',
  NEW_PASSWORD_SUCCESS: 'NEW_PASSWORD_SUCCESS',
  NEW_PASSWORD_ERROR:   'NEW_PASSWORD_ERROR'
};

export default {
  name: "UserPasswordRecoveryConfirm",
  components: {
    UserTemplate,
    UserPasswordRecoveryConfirmForm: UserPasswordRecoveryNewPassForm
  },
  data() {
    return {
      PASSWORD_RECOVERY_CONFIRM_STEPS,
      step: PASSWORD_RECOVERY_CONFIRM_STEPS.NEW_PASSWORD, // NEW_PASSWORD, NEW_PASSWORD_SUCCESS, NEW_PASSWORD_ERROR
      stepData: {}
    };
  },
  methods: {

    setStep(stepName, stepData = {}) {
      this.step = stepName;
      this.stepData = stepData;
    },

    passwordRecoveryConfirmSubmit() {
      console.warn('[Recovery password]: New password created!');
      this.setStep(PASSWORD_RECOVERY_CONFIRM_STEPS.NEW_PASSWORD_SUCCESS);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./userStyle";
</style>
