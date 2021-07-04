<template>
  <FveTemplateField>
    <DatePicker
      :popover="{ placement: 'bottom-end', visibility: 'click' }"
      v-model="valueDatePickerComputed"
      color="red"
      is-dark
      :mode="DATE_PICKER_MODE"
      is24hr
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
            v-mask="DATE_INPUT_MASK"
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
  </FveTemplateField>
</template>

<script>

import DatePicker from 'v-calendar/lib/components/date-picker.umd';
import FveMixinField from "@widgetFormValidate/src/Mixin/FveMixinField";

export default {
  mixins: [
    FveMixinField
  ],
  props: {
    value       : { type: DateTime },
    placeholder : { type: DateTime },
    min         : { type: DateTime },
    max         : { type: DateTime },
  },
  data() {
    return {
      DATE_PICKER_MODE  : 'date',
      DATE_INPUT_MASK   : '##.##.#### ##:##',
      DATE_FORMAT_VIEW  : 'DD.MM.YYYY HH:mm',
      // DATE_FORMAT_API   : 'YYYY-MM-DDTHH:mm:ss',

      cacheStr: '',
    };
  },
  components: {
    DatePicker
  },
  methods: {
    // для строк -> приходит строка и преобразуем в DateTime
    prepareInput(value){
      return value;
    },
    // на выходе ожидается строка у нас DateTime
    prepareOutput(valueDateTime){
      if(valueDateTime === null) { return null; }
      return valueDateTime;
    },


    // strToDate(str, format1) {
    //   let date = DateTime(str, format1, true);
    //   if( !date.isValid() ){
    //     return null;
    //   }
    //   return date.toDate();
    // },
    // prepareDateFormat(str, format1, format2) {
    //   let date = DateTime(str, format1, true);
    //   if( !date.isValid() ){
    //     return str;
    //   }
    //   return date.format(format2);
    // },
    inputPrepareFormElement(valueDateTime) {
      this.inputFormElement( this.prepareOutput(valueDateTime) );
    },
    prepareValue($event) {
      return $event;
    },
    isEmpty(value) {
      return !value && this.cacheStr === '';
    },
    validateFunction(value) {
      if( this.cacheStr ) {
        return 'Некорректно введенная дата';
      }
      return 'SUCCESS';
    },
  },
  computed: {
    valueDateTime() {
      return this.prepareInput(this.value);
    },
    valueDatePickerComputed: {
      get() {
        return this.valueDateTime ? this.valueDateTime.toDate() : null;
      },
      set(value) {
        this.cacheStr = '';
        const valueDateTime = DateTime(value);
        this.inputPrepareFormElement( valueDateTime );
      }
    },
    valueInputComputed: {
      get() {
        if( this.cacheStr ) {
          return this.cacheStr;
        }
        return this.valueDateTime ? this.valueDateTime.format(this.DATE_FORMAT_VIEW) : '';
      },
      set(value) {
        if( value === '') {
          this.inputPrepareFormElement( null );
        }

        let date = DateTime(value, this.DATE_FORMAT_VIEW, true);
        if( !date.isValid() ){
          this.cacheStr = value;
          return;
        }

        this.inputPrepareFormElement( date );
      }
    },


    placeholderCache() {
      return !this.placeholder ? '' : this.prepareInput(this.placeholder).format(this.DATE_FORMAT_VIEW);
    },
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
