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
        @input="inputFormElement"
        @change="inputFormElement"
        @keypress.enter="$emit('keypress-enter')"
    ></textarea>
  </FveFieldTemplate>
</template>

<script>

import FveFieldMixin from "@FormValidate/FveFieldMixin";

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

@import '~@FormValidate/style/const.scss';

textarea {
  ::-webkit-input-placeholder { color: var(--fve-color-placeholder); }
  :-ms-input-placeholder      { color: var(--fve-color-placeholder); }
  ::-ms-input-placeholder     { color: var(--fve-color-placeholder); }
  ::placeholder               { color: var(--fve-color-placeholder); }

  display           : var(--fve-input--display          );
  margin            : var(--fve-input--margin           );
  padding           : var(--fve-input--padding          );
  width             : var(--fve-input--width            );
  height            : var(--fve-textarea--height        );
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
  resize: vertical;

  &:focus {
    outline: none;
  }


  // TODO: fix
  &[readonly],
  &[disabled] {
    opacity: .5;
  }

}

</style>
