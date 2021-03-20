<script>

import FveText from "@FormValidate/Element/FveText";

export default {
  mixins: [
    FveText
  ],
  methods: {
    validateFunction(str) {
      if(str.length < 5 ){ return 'Длинна логина не менее 5 символов'; }
      return 'SUCCESS';
    },
  }
};
</script>
