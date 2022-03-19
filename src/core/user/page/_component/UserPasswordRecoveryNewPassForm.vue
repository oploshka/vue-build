<template>
  <FveForm class="form-auth form-base row">
    <div class="form-group">
      <FvePassword
        :field="field.password"
        label="Password"
        placeholder="6+ Characters"
      />
    </div>
    <div class="form-group">
      <button type="button" @click="submit" class="pl-btn auth__btn">Save and go to login</button>
    </div>
  </FveForm>
</template>

<script>
import FveMixinForm    from '@fve/Mixin/FveMixinForm';
import FvePassword from "@fve/Element/Text/FvePassword";

export default {
  name: "UserPasswordRecoveryNewPassForm",
  mixins: [ FveMixinForm ],
  components: { FvePassword },
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
        password: {
          type: String,
          default: () => { return ''; },
          field: {
            required: true,
          }
        },
      };
    }
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

</style>
