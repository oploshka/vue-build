<script>

import FveSelectAutoComplete from "@widgetFormValidate/Element/FveSelectAutoComplete";

export default {
  mixins: [
    FveSelectAutoComplete
  ],
  props: {
    value    : { type: String, default: '' },
    getKey: {
      type: Function,
      default: (obj)=>{ return obj.code; }
    },
    getName: {
      type: Function,
      default: (obj)=>{ return obj.nameRus; }
    },
  },
};
</script>
