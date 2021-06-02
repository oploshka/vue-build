<template>
  <FveFieldTemplate>
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
  </FveFieldTemplate>
</template>

<script>

import FveFieldMixin from "@widgetFormValidate/src/Mixin/FveFieldMixin";

export default {
  mixins: [
    FveFieldMixin
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
