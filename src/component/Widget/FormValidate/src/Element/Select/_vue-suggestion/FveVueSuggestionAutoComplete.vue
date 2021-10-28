<template>
  <div v-bind:class="['form-group', { 'has-label' : label, 'has-error' : (formStatus === 'ERROR') }]">
    <label :for="name" v-if="label" >{{ label }}<span v-if="required" class="form-required">*</span></label>
    <VueSuggestion
        class="autocompleate"
        :value="value"
        :items="options"
        :setLabel="prepareValue"
        :itemTemplate="template"
        @changed="changeInputFormElement"
        @selected="inputFormElement"
        ref="suggestion"
    />
    <div v-if="formMessage" class="form-control-message">{{formMessage}}</div>
  </div>
</template>

<script>

import Template from './Template/OptionTemplate';
import { VueSuggestion } from 'vue-suggestion';
//
import FveFieldMixin from "@widgetFormValidate/src/Mixin/FveFieldMixin";

export default {
  mixins: [
    FveFieldMixin
  ],
  components: {
    VueSuggestion,
  },
  data() {
    return {
      options: [],
      template: Template,
    };
  },
  props: {
    // значение по умолчанию (можно переопределить тип)
    value    : { type: String, default: '' },
  },
  methods: {
    changeInputFormElement($event){
      this.inputFormElement($event);
      //
      let text = this.prepareValue($event);
      if (text.length < 2) {
        this.options = [];
        return;
      }
      RequestManager.User.findList({ searchLine: text })
          .then((userList) => {
            this.options = userList.map((v) => ({ id: v.userId, name: v.userLogin, firstName: v.name, lastName: v.surname }));
          });

    },
    prepareValue($event) {
      if(typeof $event === 'string') {
        return $event;
      }
      return $event.name;
    },
    isEmpty(value) {
      return value === '';
    },
    validateFunction(str) {
      if(str.length < 3) {
        return 'Длинна логина больще 2 символов';
      }
      return 'SUCCESS';
    },
  },
  watch: {
    /**
     * fix 165 line https://github.com/iamstevendao/vue-suggestion/blob/master/src/components/vue-suggestion.vue
     *  watch: {
     *    value: {
     *      handler(value) {
     *        if (!value) {
     *          return;
     *        }
     *        this.searchText = this.setLabel(value);
     *      },
     *      deep: true,
     *    },
     *    ....
     *  }
     *
     *  не устанавливается значение в пустую строку (вмешательство в плагин)
     *
     */
    value(v) {
      if(v === '') {
        this.$refs.suggestion.searchText = '';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form-group {
  ::v-deep .vue-suggestion {
    input{
      border: 1px solid #E4E6EB;
      border-radius: 4px;
      box-sizing: border-box;

      font-size: 1rem;
      line-height: 18px;
      padding: 11px 30px 13px 17px;

      width: 100%;
      height: 48px;
      //
      // &:active,
      // &:focus{
      //   border: 1px solid #004A95;
      //   outline: none;
      // }
    }
    .vs__list {
      width: 100%;
      text-align: left;
      overflow-y: auto;
      position: relative;
      z-index: 1000;
      max-height: 300px;
      background-color: #ffffff;

      //border: none;
      //border-top: none;
      //border-bottom: 1px solid #E4E6EB;
      border: 1px solid #E4E6EB;

      .vs__list-item {
        background-color: #fff;
        //   padding: 10px;
        // fix
        padding: 0px;
        border-left: 1px solid #E4E6EB;
        border-right: 1px solid #E4E6EB;
        cursor: pointer;

        &:last-child {
          border-bottom: none;
        }
        &:hover {
          background-color: #eee !important;
        }
        &.vs__item-active {
          background-color: #f3f6fa;
        }
      }
    }

    .vs__list, .vs__loading {
      position: absolute;
    }
    .vs__list .vs__selected{
      padding: 0;
      border: 0;
      margin: 0;
    }

    ///
    .vs__list {
      .vs__list-item {
        padding: 8px 16px;
        &.vs__list-item-active {

        }
      }
    }
  }
}


</style>
