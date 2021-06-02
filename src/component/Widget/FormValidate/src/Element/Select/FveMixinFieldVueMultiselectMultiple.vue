<script>

import FveMixinFieldVueMultiselect from '@widgetFormValidate/src/Element/Select/FveMixinFieldVueMultiselect'

export default {
  mixins: [
    FveMixinFieldVueMultiselect
  ],
  props: {
    // значение по умолчанию (можно переопределить тип)
    value    : { type: Array, default: () => [] },
  },
  data(){
    return {
      multiple: true,
      search: '',
      searchAdd: false,
    };
  },
  methods: {
    addItem(){},

    // для строк -> приходит строка и преобразуем в DateTime
    prepareInput(value){
      return value.map( (item) => {
        return {
          id: this.optionGetKey(item),
          name: this.optionGetName(item),
          origin: item,
        };
      });
    },
    // на выходе ожидается строка у нас DateTime
    prepareOutput(value){
      return value.map( (item) => {
        return item.origin;
      });
    },
  },
};
</script>
