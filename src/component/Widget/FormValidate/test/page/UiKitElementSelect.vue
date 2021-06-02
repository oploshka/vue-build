<script>

import UiKit from '@widgetFormValidate/test/page/UiKit';


// TODO: import FveRadioGroup  from "@widgetFormValidate/src/Element/FveRadioGroup";
// TODO: import FveCheckbox    from "@widgetFormValidate/src/Element/FveCheckbox";

export default {
  mixins: [
    UiKit
  ],
  components: {},
  data() {
    const options = [{id: 1, name: 'Вариант 1'},{id: 2, name: 'Вариант 2', asdasd:'asdasd'},{id: 3, name: 'Вариант 3'},{id: 4, name: 'Вариант 5'},{id: 5, name: 'Вариант 5'}];

    return {
      componentInfoList: [
        {name: 'select-object', component: () => import('@widgetFormValidate/src/Element/Select/vue-multiselect/FveSelectObject')  , data: {'option-list': options} },
        {name: 'select-value1', component: () => import('@widgetFormValidate/src/Element/Select/vue-multiselect/FveSelectValue')   , data: {'option-list': options} },
        {name: 'select-value2', component: () => import('@widgetFormValidate/src/Element/Select/vue-multiselect/FveSelectValue')   , data: {'option-list': options} },
        {name: 'select-value3', component: () => import('@widgetFormValidate/src/Element/Select/vue-multiselect/FveSelectValue')   , data: {'option-list': options} },
        {name: 'html-select'  , component: () => import('@widgetFormValidate/src/Element/Select/html/FveSelect')  , data: {options: options} },
        {name: 'html-radio'   , component: () => import('@widgetFormValidate/src/Element/Select/html/FveHtmlRadio')  , data: {options: options} },
        {name: 'FveVueSuggestionSelect'   , component: () => import('@widgetFormValidate/src/Element/Select/_vue-suggestion/FveVueSuggestionSelect')  , data: {options: options} },
      ],
    };
  },
  methods: {
    formSchema() {
      return {
        'select-object'  : { type: Object    , default: () => { return {id: 3, name: 'Вариант 3'}; } },
        'select-value1'  : { type: Number    , default: () => { return 1; } },
        'select-value3'  : { type: Number    , default: () => { return null; } },
        'html-select'    : { type: String    , default: () => { return ''; } },
        'html-radio'     : { type: String    , default: () => { return ''; } },
        'FveVueSuggestionSelect'     : { type: String    , default: () => { return ''; } },
      };
    },
  }
};

</script>
