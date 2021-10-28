<template>
  <form class="form-auth form-base row" @submit="formSubmit"  @submit.prevent="formSubmit">
    <div class="col-12">
      <FveText
        label="Введите код из SMS"
        name="login"
        v-model="form.login"
        @keypress-enter="formSubmit"
      />
    </div>

    <div class="col-12">
      <button type="button" @click="formSubmit" class="pl-btn auth-form__btn">Подтвердить</button>
    </div>
  </form>
</template>

<script>

//
import FveMixinForm   from '@fve/Mixin/FveMixinForm';
//
import FveText        from '@fve/Element/Text/FveText';

export default {
  mixins: [
    FveMixinForm
  ],
  components: {
    FveText,
  },
  methods: {
    formSchema() {
      return {
        login: {
          type: String,
          default: () => { return ''; }
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

</style>
