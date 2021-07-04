<script>

import FveMixinFieldDatePicker from '@widgetFormValidate/src/Element/Date/FveMixinFieldDatePicker';

export default {
  mixins: [
    FveMixinFieldDatePicker
  ],
  props: {
    value       : { type: String },
    placeholder : { type: String },
    min         : { type: String },
    max         : { type: String },
  },
  data() {
    return {
      DATE_PICKER_MODE  : 'date',
      DATE_INPUT_MASK   : '##.##.####',
      DATE_FORMAT_VIEW  : 'DD.MM.YYYY',
      DATE_FORMAT_API   : 'YYYY-MM-DD',
    };
  },
  methods: {
    // для строк -> приходит строка и преобразуем в DateTime
    prepareInput(value){
      let date = DateTime(value, this.DATE_FORMAT_API, true);
      if( !date.isValid() ){
        // TODO: fix placeholder prepareInput
        this.cacheStr = value;
        return null;
      }
      return date;
    },

    prepareOutput(valueDateTime){
      if(valueDateTime === null) { return null; }
      return valueDateTime.format(this.DATE_FORMAT_API);
    },
  },
};
</script>


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

      cacheStr: '',
    };
  },
  components: {
    DatePicker
  },
  methods: {
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

