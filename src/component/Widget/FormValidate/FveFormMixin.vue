<script>

export default {

  props: {
    formData: {
      type: Object,
      default: () => { return {}; }
    },
  },
  data() {
    let form = this.formGetDefaultData();
    return {
      form: form,
    };
  },
  methods: {

    formSchema() {
      return {};
    },

    // TODO: тут пользовательская валидация.
    validate() {

    },

    // TODO: это поведение по умолчанию???
    getFormData() {
      return { ...this.form };
    },


    ////////////////////////////////
    formReset($event) {
      // todo после сброса остаются сообщения об ошибке
      this.form = this.formGetDefaultData();
      this.$emit('reset');
    },
    formCancel($event) {
      this.$emit('cancel');
    },
    formSubmit($event) {
      // TODO: fix default prevent
      // if($event && 'currentTarget' in $event) {
      //   // $event.defaultPrevented = true;
      //   $event.currentTarget.addEventListener("submit", (event) => {
      //     event.preventDefault();
      //   });
      // }

      const data = this.formSubmitGetData();
      data && this.$emit('submit', data);
    },
    //
    formGetDefaultData() {
      let form = {};
      const formSchema = this.formSchema();
      for(let key in formSchema) {
        if(key in this.formData) {
          // TODO: vue validateProps
          // if(typeof this.formData[key] !== formSchema[key].type){
          //   console.warn('formSchema - is not correct type', key, formSchema, this.formData, this  );
          // }
          form[key] = this.formData[key];
        } else {
          form[key] = formSchema[key].default ? formSchema[key].default() : null;
        }
      }
      return form;
    },
    //
    formSubmitGetData() {
      if( !this.formElementValidate() ) {
        return false;
      }
      return this.getFormData();
    },
    formElementGet(){
      const formElementArr = [];
      for(let i = 0; i < this.$children.length; i++){
        if(this.$children[i].interface !== 'FormElementInterface'){
          continue;
        }
        formElementArr.push(this.$children[i]);
      }
      return formElementArr;
    },
    formElementValidate(){
      let formIsValid = true;
      //
      const formElementArr = this.formElementGet();
      for(let i = 0; i < formElementArr.length; i++){
        let formElement = formElementArr[i];
        let res = formElement.validate(formElement.value);
        formIsValid = formIsValid && res;
      }
      //
      return formIsValid;
    }

  },
  computed: {}
};

</script>

<style lang="scss" scoped>
.form-auth {
  &__recovery {
    display: inline-block;
    margin: 14px 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 2;
    float: right;
  }
  .btn {
    display: block;
    width: 100%;
  }
}

.grid-sm {
  .form-auth {
    &__recovery {
      margin: 6px 0;
    }
  }
}

</style>
