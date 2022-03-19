<template>
  <FveForm class="user-edit form-base">

    <div class="block-2">
      <div class="section">
        <h3>Login Data</h3>
        <div class="row">
          <div class="form-group">
            <FveText
                :field="field.login"
                label="Login"
            />
          </div>
        </div>
        <div class="user-edit__form-section">
          <div class="col-6">
            <FveText
                :field="field.firstName"
                label="First Name"
            />
          </div>
          <div class="col-6">
            <FveText
                :field="field.lastName"
                label="Last Name"
            />
          </div>
          <div class="col-6">
            <FveEmail
                :field="field.mail"
                label="E-mail"
                placeholder="name@mail.com"
            />
          </div>
          <div class="col-6">
            <FvePassword
                :field="field.password"
                label="Password"
                placeholder="6+ Characters"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="btn-group">
      <button type="button" @click="$emit('close', { action: 'CLOSE' })" class="btn btn--outline">Discard</button>
      <button type="button" @click="submit" class="btn btn--primary">Save</button>
    </div>

  </FveForm>
</template>

<script>

import FveMixinForm from '@fve/Mixin/FveMixinForm';

import FveEmail from '@fve/Element/Text/FveEmail';
import FvePassword from '@fve/Element/Text/FvePasswordShowPass';
import FveText from "@fve/Element/Text/FveText";

export default {
  mixins: [
    FveMixinForm
  ],
  data() {
    return {};
  },
  components: {
    FveText,
    FveEmail,
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
        firstName: {
          type: String,
          default() { return ''; },
          field: {
            required: true,
          }
        },
        lastName: {
          type: String,
          default() { return ''; },
          field: {
            required: true,
          }
        },
        password: {
          type: String,
          default: () => { return ''; },
        },
        mail: {
          type: String,
          default: () => { return ''; }
        },
      };
    },
  }

};

</script>

<style lang="scss" scoped>

.user-edit {
  width: 100%;
  padding: 40px 72px;
  display: flex;

  .block-1,
  .block-2 {
    display: flex;
    flex-direction: column;
  }

  .block-2 {
    flex: 1 1 auto;
    max-width: 536px;
  }

}

.section {
  margin-bottom: 32px;

  & > h3 {
    font-weight: 700;
    font-size: 1.375rem;
    line-height: 1.45;
    color: var(--color-gray-09);
    margin-bottom: 16px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

}

.col-6 {
  padding: 0 8px;
}

.user-edit__image {
  @include icon-size(10);
  border-radius: 100%;
  margin-top: 58px;
  margin-right: 16px;
}

.user-edit__form-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.btn-group {
  display: flex;
  justify-content: flex-end;
  margin: 0 -8px;
  & > .btn {
    margin: 0 8px;
    min-width: 148px;
  }
}

</style>
