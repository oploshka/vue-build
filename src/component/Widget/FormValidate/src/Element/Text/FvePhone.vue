<template>
  <FveFieldTemplate>
    <PhoneMaskInput
      autoDetectCountry
      showFlag
      @onValidate="onValidate"
      wrapperClass="fve-field-phone--wrapper"
      inputClass="fve-field-phone--input"
      flagClass="fve-field-phone--flag-icon"
      :value="value"
      @input="inputFormElement"
    />
  </FveFieldTemplate>
</template>

<script>

import PhoneMaskInput from  "vue-phone-mask-input";

import FveFieldMixin from "@widgetFormValidate/src/Mixin/FveFieldMixin";

export default {
  mixins: [
    FveFieldMixin
  ],
  components: {
    PhoneMaskInput
  },
  props: {
    // значение по умолчанию (можно переопределить тип)
    value    : { type: String, default: '' },
  },
  methods: {
    onValidate(val) {},
    //
    //
    prepareValue($event) {
      $event.replace(' ','');
      return $event;
    },
    isEmpty(value) {
      return value === '' || value === '+7';
    },
    validateFunction(str) {
      if( str.length<5 ) {
        return 'проверьте номер введенного телефона';
      }
      return 'SUCCESS';
    },
  }
};
</script>

<style lang="scss" scoped>

.fve {

  ::v-deep .fve-field-phone--wrapper {
    position: relative;
    @import "~@widgetFormValidate/style/inputText.scss";
  }
  ::v-deep .flag {
    position: absolute;
    right: 9px;
    top: 9px;
  }
}
</style>
