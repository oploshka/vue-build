<template>
  <FveTemplateField>
    <div class="select-line">
      <template v-for="option in optionList">
        <div
          class="select-line-item"
          :class="{ active: (value === optionGetKey(option)) }"
          :key="optionGetKey(option)"
          @click="inputFormElement(option)"
        >{{ optionGetName(option) }}</div>
      </template>
    </div>
  </FveTemplateField>
</template>

<script>

import FveMixinField        from "@widgetFormValidate/src/Mixin/FveMixinField";
import FveMixinFieldSelect  from '@widgetFormValidate/src/Mixin/FveMixinFieldSelect';

export default {
  name: 'FveSelectLine',
  mixins: [
    FveMixinField,
    FveMixinFieldSelect,
  ],
  props: {
    value: [Number, String],
  },
  methods: {
    prepareValue(option) {
      return this.optionGetKey(option);
    },
    isEmpty(value) {
      return !value;
    },
    validateFunction(value){
      return 'SUCCESS';
    },
  },
};
</script>

<style lang="scss" scoped>

.select-line {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}

.select-line-item {
  background-color: #2C2D2E;
  border-color: #2C2D2E;
  cursor: pointer;

  position: relative;
  flex: 1 1 auto;

  vertical-align: middle;

  margin-bottom: 24px;
  padding: 8px 16px;
  font-size: 14px;
  color: #ffffff;
}
.select-line-item:hover {

}

.select-line-item.active {
  color: #343A40;
  background-color: var(--color-prime);
  border-color: var(--color-prime);
}
.select-line-item:hover {

}


.select-line-item:first-child {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.select-line-item:last-child {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
</style>

