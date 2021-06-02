<script>

import FveMixinFieldVueMultiselect from '@widgetFormValidate/src/Element/Select/FveMixinFieldVueMultiselect';

export default {
  mixins: [
    FveMixinFieldVueMultiselect
  ],
  props: {
    value: [Number, String],
  },
  methods: {
    prepareInput(value){
      if(!value) {
        return null;
      }
      let v = this._optionList.find(option => option.id === this.value.toString());
      return v ? {
        id: this.optionGetKey(v),
        name: this.optionGetName(v),
        origin: v,
      } : null;

    },
    prepareOutput(value){
      return value ? this.optionGetKey(value.origin) : null;
    },
  },
};
</script>
