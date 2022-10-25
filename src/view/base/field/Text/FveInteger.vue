<script>

import FveText from '@field/Text/FveText';

export default {
  name: 'FveInteger',
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
    isInDesiredForm(str) {
      const n = Math.floor(Number(str));
      return n !== Infinity && String(n) === str && n >= 0;
    },

    validate(valueObj) {
      if( !this.isInDesiredForm(valueObj.input) ) {
        return {
          status: 'ERROR',
          code : 'VALIDATE',
          message: 'Введите корректное число',
        };
      }
      return null;
    },

    convertObjectToValue(valueObj) {
      if( !this.isInDesiredForm(valueObj.input) ) {
        return undefined;
      }
      return parseInt(valueObj.input);
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
