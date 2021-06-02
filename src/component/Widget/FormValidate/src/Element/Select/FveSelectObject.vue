<script>

import FveMixinFieldVueMultiselect from '@widgetFormValidate/src/Element/Select/FveMixinFieldVueMultiselect';

export default {
  mixins: [
    FveMixinFieldVueMultiselect
  ],
  props: {
    value    : { type: Object, default: () => null },
  },
  methods: {
    prepareInput(value){
      return value ? {
        id: this.optionGetKey(value),
        name: this.optionGetName(value),
        origin: value,
      } : null;
    },
    prepareOutput(value){
      return value ? value.origin : null;
    },
  },
};
</script>
