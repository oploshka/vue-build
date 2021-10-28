<template>
  <div v-bind:class="['form-check', { 'has-error' : (formStatus === 'ERROR') }]">
    <div class="form-check-bl">
      <input
        class="form-check-input"
        type="checkbox"
        :name="name"
        :id="'checkbox_' + name"
        :required="required"
        :checked="value"
        @change="inputFormElement"
      />
      <div class="form-check-vue">
        <i class="icon-check"></i>
      </div>
    </div>
    <label :for="'checkbox_' + name" class="form-check-label">
      {{ label }} <span v-if="required" class="form-required">*</span>
    </label>
  </div>
</template>

<script>

import FveFieldMixin from "@widgetFormValidate/src/Mixin/FveFieldMixin";

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
.form-check-bl {
  position: relative;
  .form-check-input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 2;
  }
  .form-check-vue {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: rgba(255,255,255,0);
    i {
      color: #ffffff;
      font-size: 9px;
      opacity: 0;
    }
  }
  .form-check-input:checked + .form-check-vue {
    background-color: $color-prime;
    i {
      opacity: 1;
    }
  }
}
</style>
