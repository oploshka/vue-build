<script>

import UiKitMixin from '@widgetFormValidate/test/page/UiKitMixin';

// text
import FveText        from "@widgetFormValidate/src/Element/Text/FveText";
import FveEmail       from '@widgetFormValidate/src/Element/Text/FveEmail';
import FveLogin       from '@widgetFormValidate/src/Element/Text/FveLogin';
import FveNumber      from '@widgetFormValidate/src/Element/Text/FveNumber';
import FvePassword    from '@widgetFormValidate/src/Element/Text/FvePassword';
import FveTime        from '@widgetFormValidate/src/Element/Text/FveTime';
import FveUrl         from '@widgetFormValidate/src/Element/Text/FveUrl';
import FvePhone       from "@widgetFormValidate/src/Element/Text/FvePhone";
import FveTextarea    from "@widgetFormValidate/src/Element/Text/FveTextarea";


export default {
  mixins: [
    UiKitMixin
  ],
  data() {
    return {
      componentInfoList: [
        {name: 'text'         , component: FveText  , data: {} },
        {name: 'textarea'     , component: FveTextarea  , data: {} },
        //
        {name: 'text-phone'   , component: FvePhone     , data: {} },
        {name: 'text-email'   , component: FveEmail     , data: {} },
        {name: 'text-login'   , component: FveLogin     , data: {} },
        {name: 'text-number'  , component: FveNumber    , data: {} },
        {name: 'text-password', component: FvePassword  , data: {} },
        {name: 'text-time'    , component: FveTime      , data: {} },
        {name: 'text-url'     , component: FveUrl       , data: {} },
      ],
    };
  },
  methods: {
    formSchema() {
      return {
        text            : { type: String    , default: () => { return '';     } },
        'text-phone'    : { type: String    , default: () => { return '';     } },
        'text-email'    : { type: String    , default: () => { return '';     } },
        'text-login'    : { type: String    , default: () => { return '';     } },
        'text-number'   : { type: String    , default: () => { return '';     } },
        'text-password' : { type: String    , default: () => { return '';     } },
        'text-time'     : { type: String    , default: () => { return '';     } },
        'text-url'      : { type: String    , default: () => { return '';     } },

        textarea  : { type: String    , default: () => { return '';     } },
      };
    },
  }
};

</script>
