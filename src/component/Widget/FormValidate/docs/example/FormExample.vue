<template>
  <!--
     @submit.prevent="formSubmit" - вызывает событие обработки в миксине FveMixinForm
     novalidate="novalidate"      - отключаем браузерную валидацию полей
  -->
  <form @submit.prevent="formSubmit" novalidate="novalidate">
    <!--
      formSubmit - будет обрабатывать только поля с миксином FveFieldMixin
      обычные поля типа input, select и тд будут просто игнориться
    -->

    <!-- form element start -->

    <!-- это пример как использовать простое текстовое поле -->
    <FveText
        v-model="form.name"
    />

    <!-- form element end -->

    <!--
      Маленький совет, не забываем указывать type="button"
    -->
    <button type="button" @click="formSubmit">submit</button>
  </form>
</template>

<script>
// подключаем необходимые поля для формы
import FveText from "@widgetFormValidate/src/Element/Text/FveText";
// подключаем миксин формы
import FveMixinForm   from "@widgetFormValidate/src/Mixin/FveMixinForm";

export default {
  mixins: [
    FveMixinForm
  ],
  components: {
    FveText,
  },
  methods: {
    // необходимо описать, какие данные мы хотим получить в виде полной схемы без сокращений (как props)
    // хотелось взять валидацию props из самого vue js - но она написана на столько криво...,
    // что ее не возможно переиспользовать
    formSchema() {
      return {
        name: {
          type: String,
          default: () => { return ''; }
        },
      };
    },
  }
};

</script>
