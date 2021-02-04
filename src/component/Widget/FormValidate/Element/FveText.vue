<template>
  <FveFieldTemplate>
    <input
        :type="type"
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
        v-bind="inputAttr"
    />
  </FveFieldTemplate>
</template>

<script>

import FveFieldMixin from "@widgetFormValidate/FveFieldMixin";

export default {
  mixins: [
    FveFieldMixin
  ],
  data(){
    return {
      type: 'text',
      inputAttr: {},
    };
  },
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
