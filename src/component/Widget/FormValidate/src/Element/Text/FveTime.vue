<script>

import FveText from "@widgetFormValidate/src/Element/Text/FveText";

export default {
  mixins: [
    FveText
  ],
  props: {
    value    : { type: String, default: '00:00' },
  },
  data(){
    return {
      type: 'time',
    };
  },
  methods: {
    validateFunction(str) {
      // TODO: fix
      return 'SUCCESS';
    },
  }
};
</script>
