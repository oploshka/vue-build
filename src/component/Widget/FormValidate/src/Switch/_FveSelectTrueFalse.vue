<script>

import FveSelect from "@widgetFormValidate/src/Element/Select/FveSelect";

export default {
  mixins: [
    FveSelect
  ],
  props: {
    value    : { type: [String, Number] },
    getKey: {
      type: Function,
      default: (obj)=>{
        let value = parseInt(obj.id);
        value = isNaN(value) ? '' : value;
        return value;
      }
    },
    getName: {
      type: Function,
      default: (obj)=>{ return obj.name; }
    },
  },
  methods: {
    prepareValue($event) {
      let value = $event.target.value;
      value = parseInt(value);
      value = isNaN(value) ? '' : value;
      return value;
    },
    isEmpty(value) {
      return !(value === 0 || value === 1);
    },
    validateFunction(/*value*/){
      return 'SUCCESS';
    },
  },
};
</script>
