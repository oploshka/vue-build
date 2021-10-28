<template>
  <components
    :is="theme3"
    :label="label"
    :selected="value"
    @change="change"
  />
</template>

<script>

import FveFieldMixin from "@widgetFormValidate/src/Mixin/FveFieldMixin";

export default {
  mixins: [
    FveFieldMixin
  ],
  data(){
    return {
      theme: () => import('@widgetFormValidate/src/Switch/FveCheckbox'),
      theme2: () => import('@widgetFormValidate/src/Switch/FveSwitch'),
      theme3: () => import('@widgetFormValidate/src/Switch/FveRadio'),
    };
  },
  props: {
    // значение по умолчанию (можно переопределить тип)
    value    : { type: Boolean, default: false },
  },
  methods: {
    change(){
      this.inputFormElement(!this.value);
    },
    prepareValue($event) {
      return $event;
    },
    isEmpty(value) {
      return value === ''; // TODO: fix
    },
    // eslint-disable-next-line
    validateFunction(str) {
      return 'SUCCESS';
    },
  }
};
</script>

<style lang="scss" scoped>

@import "~@widgetFormValidate/style/inputText.scss";

</style>
