<template>
  <FveFieldTemplate>
    <select
      class="fei-control"
      :value="value"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      :required="required"
      @change="inputFormElement"
    >
      <option v-for="option in options" v-bind:key="getKey(option)" v-bind:value="getKey(option)">{{ getName(option) }}</option>
    </select>
  </FveFieldTemplate>
</template>

<script>

import FveFieldMixin from "@widgetFormValidate/src/Mixin/FveFieldMixin";

export default {
  mixins: [
    FveFieldMixin
  ],
  props: {
    value: [Number, String],
    options: Array,
    getKey: {
      type: Function,
      default: (obj)=>{ return obj.id.toString(); }
    },
    getName: {
      type: Function,
      default: (obj)=>{ return obj.name; }
    },
  },
  methods: {
    prepareValue($event) {
      const key = $event.target.value;
      return key;
    },
    isEmpty(value) {
      return !value;
    },
    validateFunction(value){
      return 'SUCCESS';
    },
  },
};
</script>

<style lang="scss" scoped>

@import "~@widgetFormValidate/style/select.scss";

</style>

