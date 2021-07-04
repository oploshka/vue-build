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

import FveMixinForm   from "@widgetFormValidate/src/Mixin/FveMixinForm";

export default {
  mixins: [
    FveMixinForm
  ],
  components: {},
  data() {
    // const options = [{id: 1, name: 'Вариант 1'},{id: 2, name: 'Вариант 2'},{id: 3, name: 'Вариант 3'},{id: 4, name: 'Вариант 5'},{id: 5, name: 'Вариант 5'}];

    return {
      componentInfoList: [],
    };
  },
  methods: {
    formSchema() {
      return {};
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
