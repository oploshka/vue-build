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
        @input="inputFormElement"
        @change="inputFormElement"
        @keypress.enter="$emit('keypress-enter')"
    />
  </FveFieldTemplate>
</template>

<script>

import FveFieldMixin from "@FormValidate/FveFieldMixin";

export default {
  mixins: [
    FveFieldMixin
  ],
  data(){
    return {
      type: 'text',
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
    validateFunction(str) {
      return 'SUCCESS';
    },
  }
};
</script>

<style lang="scss" scoped>

@import '~@FormValidate/style/const.scss';
@import "~@FormValidate/style/inputText.scss";

</style>
