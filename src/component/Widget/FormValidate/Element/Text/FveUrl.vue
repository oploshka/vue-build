<script>

import FveText from "@FormValidate/Element/FveText";

export default {
  mixins: [
    FveText
  ],
  methods: {
    validateFunction(str) {
      // eslint-disable-next-line
      const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

      if( !urlRegex.test(str) ){ return 'Не верный формат ссылки'; }
      return 'SUCCESS';
    },
  }
};
</script>
