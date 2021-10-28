<template>
  <FveFieldTemplate>
    <v-autocomplete
      class="fei-control"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      :required="required"

      :items="options"
      :item-text="getName"
      :item-value="getKey"
      :value="value"
      @change="inputFormElement"
    />
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
      return $event;
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

::v-deep .v-input {

  padding-top: 0 !important;
  margin-top: 0 !important;

  input {
    min-height: 48px;
    //padding-left: 20px !important;
    //background: #FFFFFF;
    //border: 1.5px solid #EEEEEE;
    //box-sizing: border-box;
    box-shadow: 0px 4px 30px 2px rgba(0, 0, 0, 0.01);
    //border-radius: 5px;



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
  .v-input__slot {
    &:before,
    &:after {
      display: none;
    }
  }
  .v-input__append-inner {
    position: absolute;
    right: 5px;
    top: 5px;
  }
}
</style>

