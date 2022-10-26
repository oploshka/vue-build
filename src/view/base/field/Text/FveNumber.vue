<script>

import FveText from '@field/Text/FveText';

export default {
  name: 'FveNumber',
  mixins: [
    FveText
  ],
  data(){
    return {
      type: 'number',
    };
  },
  props: {
    // // значение по умолчанию (можно переопределить тип)
    modelValue    : { type: Number, required: false },
    //
    // // Установочные
    // initValue: { type: String, required: false, default: null},
    // // настройки валидации - рекомендованные к реализация
    // min: { type: Number, required: false, default: null},
    // max: { type: Number, required: false, default: null},
  },
  methods: {
    isNumeric(str) {
      if (typeof str != 'string') return false; // we only process strings!
      return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail
    },

    validate(valueObj) {
      if( !this.isNumeric(valueObj.input) ) {
        return {
          status: 'ERROR',
          code : 'VALIDATE',
          message: 'Введите корректное число',
        };
      }
      return null;
    },

    convertObjectToValue(valueObj) {
      if( !this.isNumeric(valueObj.input) ) {
        return undefined;
      }
      return parseFloat(valueObj.input);
    },
    convertValueToObject(value) {
      return {
        input: value !== null ? value.toString() : '',
      };
    },
  },
};
</script>

<style lang="scss" scoped>

@import "~@field/style/inputText.scss";

</style>
