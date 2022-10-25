<template>
  <FveTemplateField>
    <textarea
        type="text"
        class="fei-control"
        :name="field.name"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        :value="value.input"
        :required="field.required"
        autocomplete="off"
        @input="inputValueUpdate"

        v-bind="view.inputAttr"

        ref="input"
    ></textarea>
  </FveTemplateField>
</template>

<script>

//         @keypress.enter.prevent.stop="newLine"

import FveText from './FveText';

export default {
  name: 'FveTextarea',
  mixins: [
    FveText
  ],
  // methods: {
  //   newLine($event) {
  //
  //   },
  // }
};
</script>

<style lang="scss" scoped>

@import "~@field/style/textarea.scss";

</style>
