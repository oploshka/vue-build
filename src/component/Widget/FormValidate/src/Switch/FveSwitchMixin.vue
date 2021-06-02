<script>

import FveSwitchTemplate from '@widgetFormValidate/src/Mixin/FveSwitchTemplate';

export default {
  components: {
    FveSwitchTemplate,
  },
  props: {
    value       : { type: String, default: '' },
    label       : { type: String, default: '' },

    selected    : { type: Boolean, default: false },
    //
    readonly    : { type: Boolean, default: false },
    disabled    : { type: Boolean, default: false },
    // // required: Boolean, - это должно быть в компоненте на уровень выше
    // required         : { type: Boolean, default: false },
  },
  methods: {
    change() {
      this.$emit('change', {key: this.value });
    },

    formElementBlockClass(theme) {
      return {
        'form-validate-element-switch'     : true,
        'fve-switch'                       : true,
        'fve-switch-active'                : true,
        ['fve-switch-theme__'+this.theme]  : true,
        'fve-switch-readonly'              : this.readonly,
        'fve-switch-disabled'              : this.disabled,
        // 'fve-switch-require'               : this.required,
        // 'fve-switch-status__error'         : (this.formStatus === 'ERROR'),
      };
    },
  },
};
</script>
