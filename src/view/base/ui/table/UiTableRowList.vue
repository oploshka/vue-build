<template>

  <template v-for="(item, index) of rowList" :key="'row_' + index">
    <tr class="ui-table-row utr" :class="getRowClass(item)" @click="$emit('itemClick', item)">
      <template v-for="field of fieldList" :key="field.id">
        <td class="utr-td">
          <div class="utr-cell">
            <slot :name=getSlotName(field) :item="item" :field="field" :index="index" :value="item[field.id]">
              <div class="utr-cell-name">{{ field.print ? field.print(item, field) : item[field.id]}}</div>
            </slot>
          </div>
        </td>
      </template>
    </tr>
    <tr v-if="!!rowListOpenObj[item.id]">
      <td :colspan="fieldList.length">
        <div>
          <slot :name=getSlotName(rowDetailsField) :item="item" :field="rowDetailsField" :index="null" :value="item[rowDetailsField.id]">
            <div class="utr-cell-name">{{ rowDetailsField.print ? rowDetailsField.print(item, field) : item[rowDetailsField.id]}}</div>
          </slot>
        </div>
      </td>
    </tr>
  </template>

</template>

<script>

export default {
  name: 'UiTableRowList',
  props: {
    // TODO: use normalize header fieldList
    fieldList: {
      type: Array, // [{id: 'customSlot1', name: 'customSlot1', sort: true, print(item) => { return item.text + '1' } }]
      default: () => { return []; }
    },
    rowList: {
      type: Array,
      default: () => { return []; }
    },
    rowListOpenObj: {
      type: Object,
      default: () => { return {}; }
    },
    rowDetailsField: {
      type: Object,
      default: null
    },
    getRowClass: {
      type: Function,
      default: () => {
        return () => { return {}; };
      },
    },
  },
  data() {
    return {
      sort: null, // TODO: add initSort
    };
  },
  methods: {
    getSlotName(fieldObj) {
      return fieldObj.id;
    },
  },
};

</script>

<style scoped lang="scss">
// tr
.utr {
  height: 50px;
  border-bottom: 1px solid #EDF4FD;
  color: #3A4042;

  .utr-td {
    padding-top: 13px;
    padding-bottom: 13px;
    height: inherit;
    vertical-align: top;
  }
  .utr-td:first-child {
    padding-left: 12px;
  }
  .utr-td:last-child{
    padding-right: 12px;
  }

  .utr-cell {
    padding-left: 8px;
    padding-right: 8px;

    height: 100%;

    display: flex;
    vertical-align: top;
    justify-content: flex-start;
    align-items: center;
  }

  .utr-cell-name{
    //color: #3A4042;
  }

}

// Вариант таблицы с выделением и действиями при выделении
.ui-table--hover-action .utr {
  position: relative;


  // предпоследний элемент
  .utr-td:nth-last-child(-n+2) {
    padding-right: 12px;
  }

  .utr-td:last-child{
    position: absolute;
    display: none;
    right: 0;
    top: 3px; // fix for box-shadow
    bottom: 3px; // fix for box-shadow
    height: auto;
    background: #EDF4FD;
    padding-left: 12px;
    box-shadow: -9px 1px 8px -3px #edf4fd;
  }

  &:hover {
    background: #EDF4FD;
    //box-shadow: inset 0px -1px 0px #EDF4FD;
    //border-bottom: 1px solid #EDF4FD;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    //cursor: pointer; // не видно action cursor pointer

    .utr-td:last-child {
      display: block;
    }
  }
}

</style>
