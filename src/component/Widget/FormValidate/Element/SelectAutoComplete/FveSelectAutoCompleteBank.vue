<script>

import FveSelectAutoComplete from "@widgetFormValidate/Element/FveSelectAutoComplete";

export default {
  mixins: [
    FveSelectAutoComplete
  ],
  props: {
    value    : { type: [String,Number], default: '' },
    getKey: {
      type: Function,
      default: (obj)=>{ return obj.id; }
    },
    getName: {
      type: Function,
      default: (obj)=>{ return obj.nameRus; }
    },
  },
};
</script>
