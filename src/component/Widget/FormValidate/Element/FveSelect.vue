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

import FveFieldMixin from "@widgetFormValidate/FveFieldMixin";

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
    validateFunction(/*value*/){
      return 'SUCCESS';
    },
  },
};
</script>

<style lang="scss" scoped>

select {
  ::-webkit-input-placeholder { color: var(--fve-color-placeholder); }
  :-ms-input-placeholder      { color: var(--fve-color-placeholder); }
  ::-ms-input-placeholder     { color: var(--fve-color-placeholder); }
  ::placeholder               { color: var(--fve-color-placeholder); }

  display           : var(--fve-input--display          );
  margin            : var(--fve-input--margin           );
  padding           : var(--fve-input--padding          );
  width             : var(--fve-input--width            );
  height            : var(--fve-input--height           );
  font-family       : var(--fve-input--font-family      );
  font-size         : var(--fve-input--font-size        );
  color             : var(--fve-input--font-color       );
  line-height       : var(--fve-input--line-height      );
  border            : var(--fve-input--border           );
  border-color      : var(--fve-input--border-color     );
  border-radius     : var(--fve-input--border-radius    );
  background        : var(--fve-input--background       );
  background-color  : var(--fve-input--background-color );

  transition: border-color 0.15s ease-in-out;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  // TODO: fix
  &[readonly],
  &[disabled] {
    opacity: .5;
  }

}

/*
// TODO: fix
.fve-select {
  .fve-control {
    height: var(--fve-input-height);
    padding-right: 26px;
    -webkit-appearance: none;
    -moz-appearance   : none;
    appearance        : none;
    &::-ms-expand {
      display: none;
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -3px;
    border: 6px solid transparent;
    border-top: 6px solid var(--fve-color-gray);
    pointer-events: none;
    z-index: 1;
  }
}
*/
</style>

