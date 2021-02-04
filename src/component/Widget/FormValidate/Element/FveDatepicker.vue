<template>
  <FveFieldTemplate>
    <DatePicker
      :min-date="min && min.format('YYYY-MM-DD')"
      :max-date="max && max.format('YYYY-MM-DD')"
      :popover="{ placement: 'bottom-end', visibility: 'click' }"
      :value="valueToDateFix"
      @input="datePickerHandler"
    >
      <div class="fve-datepicker">
        <input
          type="text"
          class="fve-datepicker-input"
          :name="name"
          :value="valueToDate"
          @input="dateInputHandler"
          v-mask="'##.##.####'"
          :placeholder="placeholderCache"
          :required="required"
        />
        <svg xmlns="http://www.w3.org/2000/svg" class="fve-datepicker-icon"  width="19" height="21" viewBox="0 0 19 21">
          <g id="Слой_2" data-name="Слой 2">
            <g id="Слой_1-2" data-name="Слой 1">
              <path d="M16.5,21H2.5A2.5,2.5,0,0,1,0,18.5V4.5A2.5,2.5,0,0,1,2.5,2H5V.5a.5.5,0,0,1,1,0V2h7V.5a.5.5,0,0,1,1,0V2h2.5A2.5,2.5,0,0,1,19,4.5v14A2.5,2.5,0,0,1,16.5,21ZM1,9v9.5A1.5,1.5,0,0,0,2.5,20h14A1.5,1.5,0,0,0,18,18.5V9ZM1,8H18V4.5A1.5,1.5,0,0,0,16.5,3H14V4.5a.5.5,0,0,1-1,0V3H6V4.5a.5.5,0,0,1-1,0V3H2.5A1.5,1.5,0,0,0,1,4.5Z"/>
            </g>
          </g>
        </svg>
      </div>
    </DatePicker>
  </FveFieldTemplate>
</template>

<script>

import DatePicker from 'v-calendar/lib/components/date-picker.umd';

import FveFieldMixin from "@widgetFormValidate/FveFieldMixin";

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
      valueToDateFix : this.value  ? DateTime.utc(this.value, 'YYYYMMDD').toDate() : null,
      valueToDate : this.value  ? DateTime.utc(this.value).format( 'DD.MM.YYYY') : null,
      minToDate      : this.min    ? DateTime.utc(this.min,   'YYYYMMDD') : null,
      maxToDate      : this.max    ? DateTime.utc(this.max,   'YYYYMMDD') : null,
    };
  },
  components: {
    DatePicker
  },
  methods: {
    dateInputHandler(e) {
      const date = e.target.value;
      const d = DateTime(date, 'DD.MM.YYYY', true);
      this.valueToDate = date;
      this.valueToDateFix = (d.isValid()) ? d.toDate() : null;
      this.inputFormElement(d.toDate());
    },
    datePickerHandler(date) {
      this.valueToDate = DateTime(date).format('DD.MM.YYYY');
      this.valueToDateFix = date;
      this.inputFormElement(date);
    },
    //updateCache(value) {
      // this.valueToDateFix = value  ? DateTime.utc(value, 'YYYYMMDD').toDate() : null;
      // this.minToDate      = this.min    ? DateTime.utc(this.min,   'YYYYMMDD') : null;
      // this.maxToDate      = this.max    ? DateTime.utc(this.max,   'YYYYMMDD') : null;
    //},
    prepareValue($event) {
      let res =  $event ? DateTime($event).format('YYYYMMDD') : '';
      //this.updateCache(res);
      return res;
    },
    isEmpty(value) {
      return !value;
    },
    validateFunction() {
      const d = this.valueToDate ? DateTime(this.valueToDate, 'DD.MM.YYYY', true) : null;
      return d.isValid() || null ? 'SUCCESS' : 'Некорректная дата';
    },
  },
  computed: {
    placeholderCache() {
      return this.placeholder ? DateTime(this.placeholder).format('DD.MM.YYYY') : '';
    }
  }
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
