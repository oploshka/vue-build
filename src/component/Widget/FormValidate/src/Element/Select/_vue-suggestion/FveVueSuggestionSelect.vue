<template>
  <FveFieldTemplate class="form-group">
<!--    <select-->
<!--      class="fei-control"-->
<!--      :value="value"-->
<!--      :name="name"-->
<!--      :placeholder="placeholder"-->
<!--      :readonly="readonly"-->
<!--      :disabled="disabled"-->
<!--      :required="required"-->
<!--      @change="inputFormElement"-->
<!--    >-->
<!--      <option v-for="option in options" v-bind:key="getKey(option)" v-bind:value="getKey(option)">{{ getName(option) }}</option>-->
<!--    </select>-->
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
  </FveFieldTemplate>
</template>

<script>
import Template from './Template/OptionTemplate';
import { VueSuggestion } from 'vue-suggestion';

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
      template: Template,
    };
  },
  props: {
    value: [Number, String],
    options: Array,
    getKey: {
      type: Function,
      default: (obj)=>{ return obj.id.toString(); }
    },
    getName: {
      type: Function,
      default: (obj)=>{ return obj.name; }
    },
  },
  methods: {

    changeInputFormElement($event){
      this.inputFormElement($event);
      //
      // let text = this.prepareValue($event);
      // if (text.length < 2) {
      //   this.options = [];
      //   return;
      // }
      // RequestManager.User.findList({ searchLine: text })
      //   .then((userList) => {
      //     this.options = userList.map((v) => ({ id: v.userId, name: v.userLogin, firstName: v.name, lastName: v.surname }));
      //   });

    },

    prepareValue($event) {
      // const key = $event.target.value;
      // return key;

      if(typeof $event === 'string') {
        return $event;
      }
      return $event.name;
    },
    isEmpty(value) {
      return !value;
    },
    validateFunction(value){
      return 'SUCCESS';
    },
  },
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

