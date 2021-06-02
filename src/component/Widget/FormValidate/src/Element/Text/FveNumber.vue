<script>

import FveText from "@widgetFormValidate/src/Element/Text/FveText";

export default {
  mixins: [
    FveText
  ],
  data(){
    return {
      type: 'text',
      /*inputAttr: {
        step: ".01"
      },*/
    };
  },
  props: {
    // значение по умолчанию (можно переопределить тип)
    value    : { type: [Number, String], default: '' },
  },
  methods: {
    prepareValue($event) {
      let value = $event.target.value;
      if(value === '' ) {
        return null;
      }
      let floatValue = parseFloat(value);
      if(value !== floatValue.toString()) {
        return value;
      }
      return floatValue;
    },
    isEmpty(value) {
      return value === '' || value === null;
    },
    // eslint-disable-next-line
    validateFunction(str) {
      if( typeof str === 'string'){
        return 'Число введено не корректно';
      }
      return 'SUCCESS';
    },
  }
};
</script>

<style lang="scss" scoped>

@import "~@widgetFormValidate/style/inputText.scss";

</style>
