<script>
import FveText from '@field/Text/FveText';

export default {
  name: 'FveEmail',
  mixins: [FveText],
  data() {
    return {
      type: 'email',
    };
  },
  methods: {
    validate(valueObj) {
      const re =
        /^(([^а-яА-Я<>()[\]\\.,;:\s@\"]+(\.[^а-яА-Я<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(valueObj.input)) {
        return {
          status: 'ERROR',
          code: 'VALIDATE',
          message: 'Проверьте корректность E-mail адреса',
        };
      }
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@field/style/inputText.scss';
</style>
