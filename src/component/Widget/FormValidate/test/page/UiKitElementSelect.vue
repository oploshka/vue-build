<script>

import UiKitMixin from '@widgetFormValidate/test/page/UiKitMixin';

import FveSelectValue   from '@widgetFormValidate/src/Element/Select/FveSelectValue';
import FveSelectObject  from '@widgetFormValidate/src/Element/Select/FveSelectObject';
import FveSelectLine    from '@widgetFormValidate/src/Element/Select/FveSelectLine';
import FveMultiSelectObject from '@widgetFormValidate/src/Element/MultiSelect/FveMultiSelectObject'

export default {
  mixins: [
    UiKitMixin
  ],
  components: {},
  data() {
    const options = [
      {id: 1, name: 'Вариант 1', q: 1},
      {id: 2, name: 'Вариант 2', asdasd:'asdasd'},
      {id: 3, name: 'Вариант 3', q: 3},
      {id: 4, name: 'Вариант 4', q: 14},
      {id: 5, name: 'Вариант 5', q: 785}
    ];
    const options2 = [{id: 1, name: 'Вариант 1'},{id: 2, name: 'Вариант 2', asdasd:'asdasd'}];

    return {
      componentInfoList: [
        {name: 'multi-select-object', component: FveMultiSelectObject  , data: {'option-list': options} },

        {name: 'select-object', component: FveSelectObject  , data: {'option-list': options} },
        {name: 'select-value' , component: FveSelectValue   , data: {'option-list': options} },
        {name: 'select-line'  , component: FveSelectLine    , data: {'option-list': options2} },

      ],
    };
  },
  methods: {
    formSchema() {
      return {
        'select-object'  : { type: Object    , default: () => { return {id: 3, name: 'Вариант 3'}; } },
        'select-value'   : { type: Number    , default: () => { return 1; } },
        'select-line'    : { type: Number    , default: () => { return 1; } },
        'multi-select-object'  : { type: Object    , default: () => { return []; } },
      };
    },
  }
};

</script>
