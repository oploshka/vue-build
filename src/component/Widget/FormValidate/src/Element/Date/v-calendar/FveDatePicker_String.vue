<template>
  <FveFieldTemplate>
    <DatePicker
       :popover="{ placement: 'bottom-end', visibility: 'click' }"
        v-model="valueDatePickerComputed"
        color="red"
        is-dark
      >
      <template v-slot="{ inputEvents }">
        <!--
          :min-date="min && min.format(DATE_FORMAT_VIEW)"
          :max-date="max && max.format(DATE_FORMAT_VIEW)"
        -->
          <div class="fve-datepicker">
            <input
              type="text"
              class="fve-datepicker-input"
              :name="name"
              v-model="valueInputComputed"
              :placeholder="placeholderCache"
              :required="required"
              v-mask="'##.##.####'"
            />
            <svg v-on="inputEvents" xmlns="http://www.w3.org/2000/svg" class="fve-datepicker-icon"  width="19" height="21" viewBox="0 0 19 21">
              <g id="Слой_2" data-name="Слой 2">
                <g id="Слой_1-2" data-name="Слой 1">
                  <path d="M16.5,21H2.5A2.5,2.5,0,0,1,0,18.5V4.5A2.5,2.5,0,0,1,2.5,2H5V.5a.5.5,0,0,1,1,0V2h7V.5a.5.5,0,0,1,1,0V2h2.5A2.5,2.5,0,0,1,19,4.5v14A2.5,2.5,0,0,1,16.5,21ZM1,9v9.5A1.5,1.5,0,0,0,2.5,20h14A1.5,1.5,0,0,0,18,18.5V9ZM1,8H18V4.5A1.5,1.5,0,0,0,16.5,3H14V4.5a.5.5,0,0,1-1,0V3H6V4.5a.5.5,0,0,1-1,0V3H2.5A1.5,1.5,0,0,0,1,4.5Z"/>
                </g>
              </g>
            </svg>
          </div>
      </template>
    </DatePicker>
  </FveFieldTemplate>
</template>

<script>

import DatePicker from 'v-calendar/lib/components/date-picker.umd';
import FveFieldMixin from "@widgetFormValidate/src/Mixin/FveFieldMixin";

const DATE_FORMAT_API  = 'YYYY-MM-DD';
const DATE_FORMAT_VIEW = 'DD.MM.YYYY';

export default {
  mixins: [
    FveFieldMixin
  ],
  props: {
    value       : { type: String },
    min         : { type: String },
    max         : { type: String },
  },
  data() {
    return {
      DATE_FORMAT_API   : DATE_FORMAT_API,
      DATE_FORMAT_VIEW  : DATE_FORMAT_VIEW,
    };
  },
  components: {
    DatePicker
  },
  methods: {
    strToDate(str, format1) {
      let date = DateTime(str, format1, true);
      if( !date.isValid() ){
        return null;
      }
      return date.toDate();
    },
    prepareDateFormat(str, format1, format2) {
      let date = DateTime(str, format1, true);
      if( !date.isValid() ){
        return str;
      }
      return date.format(format2);
    },
    prepareValue($event) {
      return $event;
    },
    isEmpty(value) {
      return !value;
    },
    validateFunction(value) {
      const date = this.strToDate(value, DATE_FORMAT_API);
      return date ?  'SUCCESS' : 'Некорректная дата';
      // const d = this.valueToDate ? DateTime(this.valueToDate, DATE_FORMAT_VIEW, true) : null;
      // return d.isValid() || null ?
    },
  },
  computed: {
    placeholderCache() {
      return this.placeholder ? DateTime(this.placeholder).format(DATE_FORMAT_VIEW) : '';
    },
    valueDatePickerComputed: {
      get() {
        return this.strToDate(this.value, DATE_FORMAT_API);
      },
      set(value) {
        const _value = DateTime(value).format(DATE_FORMAT_API);
        this.inputFormElement(_value);
      }
    },
    valueInputComputed: {
      get() {
        return this.prepareDateFormat(this.value, DATE_FORMAT_API, DATE_FORMAT_VIEW);
      },
      set(value) {
        const _value = this.prepareDateFormat(value, DATE_FORMAT_VIEW, DATE_FORMAT_API);
        this.inputFormElement(_value);
      }
    }
  },
};
</script>


<style lang="scss" scoped>

@import "~@widgetFormValidate/style/inputText.scss";

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
