<template>
  <FveFieldTemplate>
    <Multiselect
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"

      :required="required"
      autocomplete="off"

      :options="_optionList"


      selectLabel=""
      selectedLabel="Выбрано"
      deselectLabel="Удалить"
      deselectGroupLabel="Press enter to deselect group"
      selectGroupLabel="Press enter to select group"

      label="name"
      track-by="id"
      v-model="_value"
    >
      <template v-slot:noOptions>Пустой список</template>
      <template v-slot:noResult>По вашему запросу ничего не найдено.</template>
    </Multiselect>
  </FveFieldTemplate>
</template>

<script>

import FveFieldMixin from "@widgetFormValidate/src/Mixin/FveFieldMixin";
import FveFieldSelectMixin from '@widgetFormValidate/src/Mixin/FveFieldSelectMixin';

import Multiselect from 'vue-multiselect';

export default {
  mixins: [
    FveFieldMixin,
    FveFieldSelectMixin
  ],
  components: {
    Multiselect
  },
  props: {
    // значение по умолчанию (можно переопределить тип)
    value    : { type: Object, default: () => null },
  },
  methods: {
    prepareValue($event) {
      return $event;
    },
    isEmpty(value) {
      return value === '';
    },
    // eslint-disable-next-line
    validateFunction(str) {
      return 'SUCCESS';
    },
  },
  computed: {
    _value: {
      get() {
        if(!this.value) {
          return null;
        }
        return {
          id: this.optionGetKey(this.value),
          name: this.optionGetName(this.value),
        };
      },
      set(option){
        // this.value = option.origin;
        this.inputFormElement(option.origin);
      }
    },
    _optionList() {
      return this.optionList.map((option) => {
        return {
          id: this.optionGetKey(option),
          name: this.optionGetName(option),
          origin: option,
        };
      });
    }
  }

  // TODO: add watcher value ---> value2
};
</script>

<style lang="scss" >
// TODO use scope
.fve {
  @import "~vue-multiselect/dist/vue-multiselect.min";
  /*
  .multiselect {
    margin: var(--fve-input--margin);
    .multiselect__select {
      width: 40px;
      height: 44px;
    }
    .multiselect__tags {
      min-height: 44px;
      padding: 8px 40px 0 16px;
      border: var(--fve-input--border);
      border-color: var(--fve-input--border-color);
      border-radius: var(--fve-input--border-radius);
      background-color: var(--fve-input--background-color);
      .multiselect__single {
        padding-top: 2px;
        padding-left: 0;
        margin-bottom: 0;
        font-family: var(--fve-input--font-family);
        font-size: var(--fve-input--font-size);
        font-weight: var(--fve-input--font-weight);
        color: var(--fve-input--font-color);
        background-color: rgba(0,0,0,0);
      }
    }
    .multiselect__input {
      min-height: 24px;
      font-family: var(--fve-input--font-family);
      font-size: var(--fve-input--font-size);
      font-weight: var(--fve-input--font-weight);
      color: var(--fve-input--font-color);
      background-color: rgba(0,0,0,0);
    }
    .multiselect__content-wrapper {
      background: var(--br-block-prime);
      border: 1px solid var(--br-block-prime);
    }
    .multiselect__option {
      color: #ACACAC;
      &--highlight {
        color: #343A40;
        background: var(--color-prime);
      }
      &--selected {
        color: #ACACAC;
        background: var(--br-block-sub);
        &.multiselect__option--highlight {
          color: var(--fve-input--font-color);
          background: var(--color-sub);
        }
      }
    }
  }
   */
}

</style>
