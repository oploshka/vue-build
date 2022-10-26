<template>
  <FveTemplateField>
    <template
      v-for="(slot, index) of Object.keys($slots)"
      :key="index"
      v-slot:[slot]="rowProps"
    >
      <slot :name="slot" v-bind="rowProps"></slot>
    </template>
    <input
      :type="view.type"
      :name="field.name"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      :value="value.input"
      :required="field.required"
      autocomplete="off"
      @input="inputValueUpdate"
      @keypress.enter.prevent="fieldFormSubmit"
      v-bind="view.inputAttr"

      ref="input"
    />
  </FveTemplateField>
</template>

<script>

import FveTemplateField from '@field/FveTemplateField';
import FveMixinField from 'vue-form-element/src/Mixin/FveMixinField';

export default {
  name: 'FveText',
  components: {
    FveTemplateField
  },
  mixins: [
    FveMixinField
  ],
  data(){
    return {
      view: {
        type: 'text',
        inputAttr: {},
      },
    };
  },
  props: {
    // // значение по умолчанию (можно переопределить тип)
    modelValue    : { type: String, required: false },
    //
    // // Установочные
    // initValue: { type: String, required: false, default: null},
    // // настройки валидации - рекомендованные к реализация
    // min: { type: Number, required: false, default: null},
    // max: { type: Number, required: false, default: null},
  },
  methods: {

    // пользовательские действия
    inputValueUpdate($event) {
      this.fieldValueUpdate({input: $event.target.value});
    },

    // описываем структуру value
    valueSchema() {
      return {
        input: {type: String, default: () => { return ''; } }
      };
    },
    convertObjectToValue(valueObj) {
      return valueObj.input;
    },
    convertValueToObject(value) {
      return {
        input: value,
      };
    },
    isEmpty(valueObj) {
      return valueObj.input === '' || valueObj.input === null || valueObj.input === undefined;
    },
    validate(valueObj) {
      if( this.field.min && valueObj.input.length < this.field.min ) {
        return {
          status: 'ERROR',
          code : 'VALIDATE',
          message: 'Длинна строки не менее '+this.field.min+' символов',
        };
      }
      if( this.field.max && valueObj.input.length > this.field.max ) {
        return {
          status: 'ERROR',
          code : 'VALIDATE',
          message: 'Длинна строки не более '+this.field.max+' символов',
        };
      }
      return null;
    },
    // Установить фокус на текущий элемент
    setFocus(){
      this.$refs.input.focus();
    },


  },
};
</script>

<style lang="scss" scoped>

@import "~@field/style/inputText.scss";
</style>
