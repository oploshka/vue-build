<template>
  <div :class="formElementBlockClass">
    <!--
      TODO: fix
      <FveFieldTemplate> - не годиться из за label
    -->
    <div class="fve-field fve-checkbox">
      <div class="fve-checkbox-bl">
        <input
          class="fve-checkbox-control"
          type="checkbox"
          :name="name"
          :id="'checkbox_' + name"
          :required="required"
          :readonly="readonly"
          :disabled="disabled"
          :checked="value"
          @change="inputFormElement"
        />
        <div class="fve-checkbox-vue"></div>
      </div>
      <label :for="'checkbox_' + name" class="fve-checkbox-label">
        {{ label }} <span v-if="required" class="fve-label-require">*</span>
      </label>
    </div>
  </div>
</template>

<script>

import FveFieldMixin from "@FormValidate/FveFieldMixin";

export default {
  mixins: [
    FveFieldMixin
  ],
  props: {
    // значение по умолчанию (можно переопределить тип)
    value    : { type: Boolean, default: false },
  },
  methods: {
    prepareValue($event) {
      return $event.target.checked;
    },
    isEmpty(value) {
      return value === false;
    },
    validateFunction(str) {
      return 'SUCCESS';
    },
  }
};
</script>

<style lang="scss" scoped>

@import '~@FormValidate/style/const.scss';

.fve-checkbox {
  padding-left: var(--fve-checkbox-indent);
  .fve-checkbox-bl {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .fve-checkbox-control {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    z-index: 2;
    cursor: pointer;
    &:checked + .fve-checkbox-vue {
      background-color: var(--fve-color-prime);
      &:after {
        opacity: 1;
      }
    }
  }
  .fve-checkbox-vue {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--fve-checkbox-size);
    height: var(--fve-checkbox-size);
    border: var(--fve-border);
    border-radius: var(--fve-border-radius);
    transition: all 0.15s ease-in-out;
    &:after {
      content: var(--fve-checkbox-mark);
      color: var(--fve-background-color);
      font-size: var(--fve-checkbox-mark-size);
      opacity: 0;
    }
  }
  .fve-checkbox-label {
    display: inline-block;
    color: var(--fve-color-gray);
    font-size: 0.75em;
    line-height: 1.3;
    vertical-align: middle;
    cursor: pointer;
    .fve-label-require {
      margin-left: 4px;
      color: var(--fve-color-prime);
      font-size: 1.2em;
    }
  }
}
</style>
