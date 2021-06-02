<template>
  <FveFieldTemplate>
    <div :class="['fve-list', { 'fve-list--inline' : inline }]">
      <template v-for="option in options">
        <div :class="['fve-field', 'fve-radio', { 'fve-disabled' : option.disabled }]" :key="getKey(option)">
          <div class="fve-radio-bl">
            <input
              type="radio"
              class="fve-radio-control"
              :name="name"
              :id="'radio-'+ name +'-'+ getKey(option)"
              :required="required"
              :disabled="option.disabled"
              :value="getKey(option)"
              :checked="value ? value === getKey(option) : false"
              @change="inputFormElement"
            />
            <div class="fve-radio-vue"></div>
          </div>
          <label class="fve-radio-label" :for="'radio-'+ name +'-'+ getKey(option)">{{ getName(option) }}</label>
        </div>
      </template>
    </div>
  </FveFieldTemplate>
</template>

<script>

import FveFieldMixin from "@widgetFormValidate/src/Mixin/FveFieldMixin";

export default {
  mixins: [
    FveFieldMixin
  ],
  props: {
    value: [Number, String],
    options: Array,
    inline: { type: Boolean, default: false },
    getKey: {
      type: Function,
      default: (obj)=>{ return obj.id.toString(); }
    },
    getName: {
      type: Function,
      default: (obj)=>{ return obj.name; }
    },
  },
  methods: {
    prepareValue($event) {
      const key = $event.target.value;
      return key;
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

.fve-list {
  &--inline {
    display: flex;
    flex-wrap: wrap;
    .fve-radio {
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.fve-radio {
  padding-left: var(--fve-radio-indent);
  margin-bottom: var(--fve-radio-margin);
  .fve-radio-bl {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .fve-radio-control {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    z-index: 2;
    cursor: pointer;
    &:checked + .fve-radio-vue {
      &:after {
        background-color: var(--fve-color-prime);
      }
    }
  }
  .fve-radio-vue {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--fve-radio-size);
    height: var(--fve-radio-size);
    border: 1px solid var(--fve-color-prime);
    border-radius: 50%;
    &:after {
      content: "";
      width: var(--fve-radio-mark-size);
      height: var(--fve-radio-mark-size);
      border-radius: 50%;
      background-color: rgba(255,255,255,0);
      transition: all 0.15s ease-in-out;
    }
  }
  .fve-radio-label {
    display: inline-block;
    color: var(--fve-color-gray);
    font-size: 0.75em;
    line-height: 1.3;
    cursor: pointer;
  }
  &.fve-disabled {
    opacity: 0.5;
    .fve-radio-control {
      cursor: default;
    }
    .fve-radio-vue {
      border: var(--fve-border);
    }
    .fve-radio-label {
      cursor: default;
    }
  }
}
</style>
