<template>
  <FveTemplateField>
    <Multiselect
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"

      :required="required"
      autocomplete="off"

      @input="inputFormElement"
      :options="options"

      selectLabel=""
      selectedLabel="Выбрано"
      deselectLabel="Удалить"
      deselectGroupLabel="Press enter to deselect group"
      selectGroupLabel="Press enter to select group"

      :multiple="true"
      v-model="value2"

      @search-change="searchChange"

      :track-by="optionFieldId"
      :label="optionFieldName"
    >
      <template v-slot:noOptions>Пустой список</template>
      <template v-slot:noResult><div>По вашему запросу ничего не найдено. <span v-if="searchAdd" style="color: red;" @click="addItem">Добавить</span></div></template>
    </Multiselect>
  </FveTemplateField>
</template>

<script>

import FveFieldMixin from "@widgetFormValidate/src/Mixin/FveFieldMixin";
import Multiselect from 'vue-multiselect';

export default {
  mixins: [
    FveFieldMixin
  ],
  components: {
    Multiselect
  },
  data(){
    return {
      value2: this.value ? [ ...this.value ] : [],
      search: '',
      searchAdd: false,
    };
  },
  props: {
    options  : { type: Array, default: () => [] },
    // значение по умолчанию (можно переопределить тип)
    value    : { type: Array, default: () => [] },
    optionFieldId: { type: String, default: () => 'id' },
    optionFieldName: { type: String, default: () => 'name' },
  },
  methods: {
    prepareValue($event) {
      return $event;
    },
    isEmpty(value) {
      return value === '' || value === null || value.length === 0;
    },
    // eslint-disable-next-line
    validateFunction(str) {
      return 'SUCCESS';
    },

    searchChange(search){
      this.search = search;
    },
    addItem(){}
  },
  watch: {
    value(newValue){
      this.value2 = this.value ? [ ...this.value ] : [];
    }
  }
  // TODO: add watcher value ---> value2
};
</script>

<style lang="scss" >
// TODO use scope
.fve {
  @import "~vue-multiselect/dist/vue-multiselect.min";
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
              color: var(--color-prime);
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
}

</style>
