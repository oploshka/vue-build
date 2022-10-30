<template>
  <div>
    <UiTable>
      <UiTableHeader :field-list="tableFieldListSchema" :initSort="sort" @sortUpdate="sortUpdate" />

      <UiTableRowList :field-list="tableFieldListSchema" :row-list="list" :getRowClass="getRowClass" />
    </UiTable>
  </div>
</template>

<script>

//
import UiTableViewMixin from '@ui/table/UiTableViewMixin';
//

export default {
  name: 'UiTableViewAction',
  mixins: [ UiTableViewMixin ],
  props: {
    fieldSchema:  {type: Array, required: true},
    //
    getRowClass:  { type: Function, default: () => { return () => { return {}; }; }, },
  },
  methods: {
    getTableFieldListSchema() {
      return this.fieldSchema;
    },
  },
};
</script>

<style scoped lang="scss">

</style>
