<template>
  <FveTemplateField>
    <Multiselect
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"

      :required="required"
      autocomplete="off"

      :options="_optionList"

      :multiple="multiple"

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
      <template v-slot:noResult><div>По вашему запросу ничего не найдено. <span v-if="searchAdd" style="color: red;" @click="addItem">Добавить</span></div></template>
    </Multiselect>
  </FveTemplateField>
</template>

<script>

import FveMixinField from "@widgetFormValidate/src/Mixin/FveMixinField";
import FveMixinFieldSelect from '@widgetFormValidate/src/Mixin/FveMixinFieldSelect';

import Multiselect from 'vue-multiselect';

export default {
  mixins: [
    FveMixinField,
    FveMixinFieldSelect
  ],
  components: {
    Multiselect
  },
  props: {
    // значение по умолчанию (можно переопределить тип)
    value    : { type: Number, default: () => null },
  },
  data(){
    return {
      multiple: false,
      search: '',
      searchAdd: false,
    };
  },
  methods: {
    addItem(){},

    // для строк -> приходит строка и преобразуем в DateTime
    prepareInput(value){
      return value ? {
        id: this.optionGetKey(value),
        name: this.optionGetName(value),
        origin: value,
      } : null;
    },
    // на выходе ожидается строка у нас DateTime
    prepareOutput(value){
      return value ? value.origin : null;
    },
    inputPrepareFormElement(valueDateTime) {
      this.inputFormElement( this.prepareOutput(valueDateTime) );
    },


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
    valuePrepare() {
      return this.prepareInput(this.value);
    },
    _value: {
      get() {
        return this.valuePrepare;
      },
      set(option){
        this.inputPrepareFormElement(option);
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
      .multiselect__tag {
        margin-bottom: 3px;
        padding: 3px 26px 4px 10px;
        color: #ACACAC;
        font-weight: 500;
        font-size: 16px;
        background-color: rgba(0,0,0,0);
        border: 1px solid #ACACAC;
        border-radius: 20px;
        .multiselect__tag-icon {
          width: 28px;
          background-color: rgba(0,0,0,0);
          &:after {
            content: "\D7";
            color: #ACACAC;
            font-size: 17px;
            font-weight: 400;
            line-height: 1;
            transition: all .2s ease-in-out;
          }
          &:hover {
            background-color: rgba(0,0,0,0);
            &:after {
              color: var(--fve-input--background);
            }
          }
        }
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
