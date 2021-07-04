<script>

import FveTemplateField from "@widgetFormValidate/src/Mixin/FveTemplateField";

export default {
  components: {
    FveTemplateField,
  },
  props: {
    // стилистика
    label       : { type: String, default: '' },
    name        : { type: String, default: '' },
    placeholder : { type: String, default: '' },
    readonly    : { type: Boolean, default: false },
    disabled    : { type: Boolean, default: false },
    // валидация
    required         : { type: Boolean, default: false },
    validateRealtime : { type: Boolean, default: true },

    validateCustomFunction: {type: Function, default: null},
    // TODO:
    // validateUserFunction : { type: Function, default: () => { return 'SUCCESS'; } },

    /*
    // НУЖНО РЕАЛИЗОВАТЬ У СЕБЯ В КОМПОНЕНТЕ!!!!!
    // зы укажи свой тип!!!
    value    : { type: String, default: '' },
    */
  },
  data() {
    return {
      formStatus: '',
      formMessage: '',
      //
      interface: 'FormElementInterface'
    };
  },
  computed: {
    formElementBlockClass() {
      return {
        'form-validate-element'     : true,
        'fve'                       : true,
        ['fve-field__' + this.name] : true,
        'fve-readonly'              : this.readonly,
        'fve-disabled'              : this.disabled,
        'fve-require'               : this.required,
        'fve-status__error'         : (this.formStatus === 'ERROR'),
      };
    },
  },
  methods: {

    /*
    // НУЖНО РЕАЛИЗОВАТЬ У СЕБЯ В КОМПОНЕНТЕ!!!!!
    prepareValue($event) {
      return $event.target.value;
    },
    isEmpty(value) {
      return value === '';
    },
    validateFunction(value){
      return 'SUCCESS';
    },
    */

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Не переопределять !!!
    //

    getFormElement() {
      return this.value;
    },

    inputFormElement($event) {
      let value = this.prepareValue($event);
      this.validateRealtime && this.validateNotEmpty(value);
      //
      this.$emit('input', value);
    },

    /**
     * Проверяем заполнено ли поле.
     * @returns {boolean}
     */
    validateRequireFormElement(value) {
      if( this.isEmpty(value) ) {
        this.formMessage = 'Поле обязательно для заполнения';
        this.formStatus  = 'ERROR';
        return false;
      }
      return true;
    },

    /**
     * Проверяем корректно ли заполнено поле (не делая проверок на заполненно оно или нет)
     * @returns {boolean}
     */
    validateFormElement(value) {
      let formMessage = this.validateFunction(value);

      if(formMessage !== 'SUCCESS') {
        this.formMessage = formMessage;
        this.formStatus  = 'ERROR';
        return false;
      }

      if(this.validateCustomFunction){
        formMessage = this.validateCustomFunction(value);

        if(formMessage !== 'SUCCESS') {
          this.formMessage = formMessage;
          this.formStatus  = 'ERROR';
          return false;
        }
      }
      return true;
    },

    /**
     *
     * @returns {boolean}
     */
    validateNotEmpty(value){
      if( !this.isEmpty(value) ) {
        let res = this.validateFormElement(value);
        if(!res) { return false; }
      }

      this.formMessage = '';
      this.formStatus  = '';
      return true;
    },

    /**
     *
     * @returns {boolean}
     */
    validate(value){
      if(this.required) {
        let res = this.validateRequireFormElement(value);
        if(!res) { return false; }
      }

      if(!this.isEmpty(value)) {
        let res = this.validateFormElement(value);
        if(!res) { return false; }
      }

      this.formMessage = '';
      this.formStatus  = '';
      return true;
    },
                                                                                                                     //
                                                                                                                     //
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  }
};
</script>
