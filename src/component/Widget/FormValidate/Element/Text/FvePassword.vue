<script>

import FveText from "@FormValidate/Element/FveText";

export default {
  mixins: [
    FveText
  ],
  data(){
    return {
      type: 'password',
    };
  },
  methods: {
    validateFunction(str) {
      const errorText = 'Пароль от 8 символов и должен содержать 1 цифру и букву';
      const regex = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/;
      if(!regex.test(str)) { return errorText; }
      return 'SUCCESS';
    },
  }
};
</script>
