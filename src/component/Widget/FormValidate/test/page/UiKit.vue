<template>
  <div class="container">

    <form @submit.prevent="formSubmit" novalidate="novalidate">
      <input type="submit" value="submit" style="display: none !important;">
      <!-- form start -->

      <div class="row">
        <div class="col-3">
          <FveText
              name="text"
              label="Text field"
              placeholder="Placeholder"
              v-model="form.text"
          />
        </div>
        <div class="col-3 form-base">
          <FveText
              name="text"
              label="Text field readonly"
              placeholder="Readonly"
              :readonly="true"
              v-model="form.text"
          />
        </div>
        <div class="col-3">
          <FveText
              name="text"
              label="Text field disabled"
              placeholder="Disabled"
              :disabled="true"
              v-model="form.text"
          />
        </div>
        <div class="col-3">
          <FveText
              name="text"
              label="Text field readonly disabled"
              placeholder="Readonly Disabled"
              :readonly="true"
              :disabled="true"
              v-model="form.text"
          />
        </div>
      </div>


      <FveTextarea
          name="textarea"
          label="Text field"
          placeholder="Placeholder"
          v-model="form.textarea"
      />

      <FveSelect
          name="select"
          label="Select"
          v-model="form.select"
          :options="[{id: 1, name: 'Вариант 1'},{id: 2, name: 'Вариант 2'},{id: 3, name: 'Вариант 3'},{id: 4, name: 'Вариант 5'},{id: 5, name: 'Вариант 5'}]"
      />

      <FveDatepicker
          name="date"
          label="Text field"
          placeholder="Placeholder"
          v-model="form.date"
      />


      <FveRadioGroup
          label="Radio list"
          name="radioVer"
          v-model="form.radioVer"
          :options="[
              {id: 1, name:'Вариант 1', },
              {id: 2, name:'Вариант 2', },
              {id: 3, name:'Вариант 3', disabled: true },
            ]"
      />

      <FveRadioGroup
          label="Radio list inline"
          name="radioHr"
          :inline="true"
          v-model="form.radioHr"
          :options="[
              {id: 1, name:'Вариант 1'},
              {id: 2, name:'Вариант 2'},
              {id: 3, name:'Вариант 3'},
            ]"
      />

      [checkbox start]
      <FveCheckbox
          name="checkbox"
          label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          v-model="form.checkbox"
      />
      [checkbox end]


      <FvePhone
          name="phone"
          label="Phone"
          placeholder="754654654"
          v-model="form.phone"
      />


      <button type="button" @click="formReset">reset</button>
      <button type="button" @click="formSubmit">validate</button>
      <!-- form end -->
    </form>

  </div>
</template>

<script>

import FveFormMixin   from "@FormValidate/FveFormMixin";

import FveText        from "@FormValidate/Element/FveText";
import FveTextarea    from "@FormValidate/Element/FveTextarea";
import FveSelect      from "@FormValidate/Element/FveSelect";
import FveDatepicker  from "@FormValidate/Element/FveDatepicker";
import FveRadioGroup  from "@FormValidate/Element/FveRadioGroup";
import FveCheckbox    from "@FormValidate/Element/FveCheckbox";
import FvePhone       from "@FormValidate/Element/FvePhone";

export default {
  mixins: [
    FveFormMixin
  ],
  components: {
    FveText,
    FveTextarea,
    FveSelect,
    FveDatepicker,
    FveRadioGroup,
    FveCheckbox,
    FvePhone,
  },
  methods: {
    formSchema() {
      return {
        text      : { type: String    , default: () => { return '';     } },
        password  : { type: String    , default: () => { return '';     } },
        phone     : { type: String    , default: () => { return '';     } },
        select    : { type: String    , default: () => { return '';     } },
        textarea  : { type: String    , default: () => { return '';     } },
        date      : { type: DateTime  , default: () => { return null;   } },
        radioVer  : { type: Number    , default: () => { return 1;      } },
        radioHr   : { type: Number    , default: () => { return 2;      } },
        checkbox  : { type: Boolean   , default: () => { return false;  } },
      };
    },
  }
};

</script>

<style lang="scss" scoped>
</style>
