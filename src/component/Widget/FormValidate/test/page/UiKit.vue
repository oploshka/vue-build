<template>
  <div class="container">

    <form @submit.prevent="formSubmit" novalidate="novalidate" class="row form-example">
      <input type="submit" value="submit" style="display: none !important;">
      <!-- form start -->

      <div class="col-12">
        <p>
          Элемент только для чтения просто не редактируется,
          но отправляется при отправке соответствующей формы.
          Отключенный элемент не редактируется и не отправляется при отправке.
          Еще одно отличие заключается в том,
          что элементы только для чтения могут быть сфокусированы
          (и становятся сфокусированными при "закладке" через форму),
          в то время как отключенные элементы-нет.
        </p>
      </div>

      <template v-for="componentInfo in componentInfoList">
      <div class="col-12" :key="componentInfo.name">
        <div class="row" style="margin-top: 30px;">

          <div class="col-12"><h4>{{componentInfo.name}}</h4></div>
          <div class="col-12"><pre>{{form[componentInfo.name]}}</pre></div>

          <template v-for="required in ['', 'required']">
            <template v-for="readonly in ['', 'readonly']">
              <template v-for="disabled in ['', 'disabled']">
                <div class="col-3" :key="required + '-' + readonly + '-' + disabled">
                  <component
                    v-bind:is="componentInfo.component"
                    v-bind="Object.assign({
                    label       :'Label ' + componentInfo.name + ' ( ' + required + ' ' + readonly + ' ' + disabled + ' )',
                    placeholder : 'Placeholder ' + componentInfo.name,
                    required    : !!required,
                    readonly    : !!readonly,
                    disabled    : !!disabled,
                  },
                  componentInfo.data
                )"
                    v-model="form[componentInfo.name]"
                  />
                </div>

              </template>
            </template>
          </template>

          </div>
        </div>
      </template>

      <div class="col-12">
        <div class="row" style="margin-top: 30px; margin-bottom: 30px;">
          <div class="col-12"><button type="button" @click="formReset">reset</button></div>
          <div class="col-12"><button type="button" @click="formSubmit">validate</button></div>
        </div>
      </div>
      <!-- form end -->
    </form>

  </div>
</template>

<script>

import FveFormMixin   from "@widgetFormValidate/src/Mixin/FveFormMixin";

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

// date and time
// TODO: import FveDatepicker  from "@widgetFormValidate/src/Element/FveDatepicker";

// options
import FveSelect      from "@widgetFormValidate/src/Element/Select/html/FveSelect";
// TODO: import FveRadioGroup  from "@widgetFormValidate/src/Element/FveRadioGroup";
// TODO: import FveCheckbox    from "@widgetFormValidate/src/Element/FveCheckbox";


export default {
  mixins: [
    FveFormMixin
  ],
  components: {},
  data() {
    const options = [{id: 1, name: 'Вариант 1'},{id: 2, name: 'Вариант 2'},{id: 3, name: 'Вариант 3'},{id: 4, name: 'Вариант 5'},{id: 5, name: 'Вариант 5'}];

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
        //
        // {name: 'datepicker' , component: FveDatepicker  , data: {} },
        // {name: 'datepicker' , component: FveDatepicker  , data: {required: true} },
        //
        {name: 'select'     , component: FveSelect, data: { options: options} },

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
        // // time
        // datepicker: { type: String    , default: () => { return '';     } },
        // date      : { type: DateTime  , default: () => { return null;   } },
        // // options
        select    : { type: String    , default: () => { return '';     } },
      };
    },
  }
};

</script>

<style lang="scss">
@import "~@widgetFormValidate/style/const.scss";
</style>

<style lang="scss" scoped>
@import "~bootstrap";
</style>
