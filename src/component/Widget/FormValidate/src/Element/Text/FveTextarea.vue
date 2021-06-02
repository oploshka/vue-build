<template>
  <FveTemplateField>
    <textarea
      type="text"
      class="fei-control"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      :value="value"
      :required="required"
      autocomplete="off"
      @input="inputFormElement"
      @change="inputFormElement"
      @keypress.enter="$emit('keypress-enter')"
    ></textarea>
  </FveTemplateField>
</template>

<script>

import FveMixinField from "@widgetFormValidate/src/Mixin/FveMixinField";

export default {
  mixins: [
    FveMixinField
  ],
  props: {
    // значение по умолчанию (можно переопределить тип)
    value    : { type: String, default: '' },
  },
  methods: {
    prepareValue($event) {
      return $event.target.value;
    },
    isEmpty(value) {
      return value === '';
    },
    validateFunction(str) {
      return 'SUCCESS';
    },
  }
};
</script>

<style lang="scss" scoped>

@import "~@widgetFormValidate/style/textarea.scss";

</style>
