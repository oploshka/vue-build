<script>

import FveText from '@field/Text/FveText';

export default {
  name: 'FveUrl',
  mixins: [
    FveText
  ],
  methods: {
    validate(valueObj) {
      const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
      if( !urlRegex.test(valueObj.input) ) {
        return {
          status: 'ERROR',
          code : 'VALIDATE',
          message: 'Не верный формат ссылки',
        };
      }

      return null;
    },
  }
};
</script>

<style lang="scss" scoped>

@import "~@field/style/inputText.scss";

</style>
