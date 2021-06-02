<readme>

!!! в процессе реализации !!!

Данный миксин нужен для создания сложных форм с возможностью добавления нескольких компонентов

Пример:
[
  {userName: "tester1", userRole: 1},
  {userName: "tester2", userRole: 1}
]

Другой вариант использования для множественных полей, где результат будет
["tester1", "tester2"]

Возможно стоит подумать над разделением миксина на 2 части
FveMultiGroupMixin.vue
FveMultiItemMixin.vue

</readme>

<script>

import FveMultiTemplate from "@widgetFormValidate/src/Mixin/FveMultiTemplate";
import FveMixinField from "@widgetFormValidate/src/Mixin/FveMixinField";

export default {
  mixins: [
    FveMultiTemplate,
    FveMixinField,
  ],
  props: {
    // значение по умолчанию (можно переопределить тип)
    value    : { type: Array, default: () => { return [];} },
  },
  methods: {
    addItem() {
      // TODO: fix
      this.value.push('Зал ' +  (this.value.length+1) );
      this.$emit('input', this.value);
    },
    removeItem(index) {
      let value = [...this.value.slice(0, index), ...this.value.slice(index + 1, this.value.length)];
      this.$emit('input', value);
    },
    prepareValue($event) {
      return $event;
    },
    isEmpty(value) {
      return !value || value.length < 1;
    },
    validateFunction(str) {
      return 'SUCCESS';
    },
  }
};
</script>

<style lang="scss" scoped>

</style>
