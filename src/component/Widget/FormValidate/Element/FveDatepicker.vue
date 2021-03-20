<template>
  <FveFieldTemplate>
    <DatePicker
        :min-date="min && min.format('YYYY-MM-DD')"
        :max-date="max && max.format('YYYY-MM-DD')"
        :popover="{ placement: 'bottom-end', visibility: 'click' }"
        :value="valueToDate"
        @input="inputFormElement"
    >
      <div class="fve-datepicker">
        <input
            type="text"
            class="fve-datepicker-input"
            :name="name"
            :value="value ? value.format('DD.MM.YYYY') : null"
            :placeholder="placeholder"
            :readonly="true"
            :required="required"
        />
        <img svg-inline class="fve-datepicker-icon" src="@img/icon/calendar2.svg" />
      </div>
    </DatePicker>
  </FveFieldTemplate>
</template>

<script>

import DatePicker from 'v-calendar/lib/components/date-picker.umd';

import FveFieldMixin from "@FormValidate/FveFieldMixin";

export default {
  mixins: [
    FveFieldMixin
  ],
  props: {
    value       : { type: DateTime },
    min         : { type: DateTime },
    max         : { type: DateTime },
  },
  data() {
    return {
      // необходимо для корректной работы!!! иначе первый выбор даты происходит не корректно...
      valueToDate: this.value ? this.value.toDate() : null
    };
  },
  components: {
    DatePicker
  },
  methods: {
    prepareValue($event) {
      return $event ? DateTime($event) : null;
    },
    isEmpty(value) {
      return !value;
    },
    validateFunction(str) {
      return 'SUCCESS';
    },
  },
};
</script>


<style lang="scss" scoped>

@import '~@FormValidate/style/const.scss';
@import "~@FormValidate/style/inputText.scss";

input[readonly],
input[disabled] {
  opacity: 1;
}

// TODO: fix
.fve-datepicker {
  position: relative;
  .fve-datepicker-input {
    padding-right: 40px;
  }
  .fve-datepicker-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    width: auto;
    transform: translateY(-50%);
    cursor: pointer;
    path {
      transition: fill 0.15s ease-in-out;
    }
    /*
    ховер на наведение инпута!!!!
    // TODO: fix
    &:hover {
      path {
        fill: $color-prime;
      }
    }
    */
  }
}
</style>
