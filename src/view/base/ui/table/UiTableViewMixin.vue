<script>
/*
Это компонент для упрощения отображения таблицы.
На вход принимается список list и sort.
 */

import UiTable        from '@ui/table/UiTable';
import UiTableHeader  from '@ui/table/UiTableHeader';
import UiTableRowList from '@ui/table/UiTableRowList';

export default {
  name: 'UiTableViewMixin',
  components: {
    UiTable,
    UiTableHeader,
    UiTableRowList,
  },
  props: {
    list: { type: Array,  default: () => { return []; }, },
    sort: { type: Object, default: () => { return {}; }, },
  },
  methods: {
    getTableFieldListSchema() {
      return [];
    },
    sortUpdate(sortData) {
      this.$emit('sortUpdate', sortData);
    },
  },
  computed: {
    tableFieldListSchema() {
      return this.getTableFieldListSchema();
    },
  },
};
</script>
