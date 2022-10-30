<template>
  <tr class="ui-table-header uth">
    <template v-for="field of fieldList" :key="field.id">
      <th class="uth-th">
        <div class="uth-cell" :class="{ 'uth-cell--sortable': field.sort }" @click="sortUpdate(field)">
          <div class="uth-cell-name">
            <slot :name="getSlotName(field)">{{ field.name }}</slot>
          </div>
          <!-- Сортировка -->
          <template v-if="field.sort">
            <div
              class="uth-cell-sort"
              :class="{
                'uth-cell-sort-asc': sort && sort.name === field.id && sort.order === 'ASC',
                'uth-cell-sort-desc': sort && sort.name === field.id && sort.order === 'DESC',
              }">
              <img
                svg-inline
                src="@ui/table/icon/sorting.svg"
                :class="{ icon_color_active: sort && sort.name === field.id }"
                alt="sort" />
            </div>
          </template>
        </div>
      </th>
    </template>
  </tr>
</template>

<script>
const EMIT_SORT = 'sortUpdate';

export default {
  name: 'UiTableHeader',
  emits: [EMIT_SORT],
  props: {
    // TODO: use normalize header fieldList
    fieldList: {
      type: Array, // [{id: 'customSlot1', name: 'customSlot1', sort: true, }]
      default: () => {
        return [];
      },
    },
    initSort: {
      type: Object, // {name: sortFieldName, order: ask|desk}
      default: () => {
        return null;
      },
    },
  },
  data() {
    return {
      sort: this.initSort || null, // TODO: add initSort
    };
  },
  methods: {
    // issetCustomSlot(slotName) {
    //   return !!this.$.slots[slotName];
    // },
    getSlotName(fieldObj) {
      return fieldObj.id;
    },
    sortUpdate(fieldObj) {
      if (!fieldObj.sort) {
        return;
      }

      if (this.sort === null || this.sort.name !== fieldObj.id) {
        this.sort = { name: fieldObj.id, order: 'ASC' };
        return this.$emit(EMIT_SORT, { ...this.sort });
      }

      this.sort.order = this.sort.order === 'ASC' ? 'DESC' : 'ASC';
      return this.$emit(EMIT_SORT, { ...this.sort });
    },
  },
};
</script>

<style scoped lang="scss">
// tr
.uth {
  height: 50px;
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: #fff;
  &::after {
    content: '';
    height: 1px;
    // width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #edf4fd;
  }

  .uth-th {
    padding-top: 13px;
    padding-bottom: 13px;
    height: inherit;
    vertical-align: top;
  }
  .uth-th:first-child {
    padding-left: 12px;
  }
  .uth-th:last-child {
    padding-right: 12px;
  }

  .uth-cell {
    padding-left: 8px;
    padding-right: 8px;

    height: 100%;

    display: flex;
    vertical-align: top;
    justify-content: flex-start;
    align-items: center;
    cursor: default;

    &.uth-cell--sortable {
      cursor: pointer;
    }
  }

  .uth-cell-name {
    color: #a4b0b5;
  }
  .uth-cell-sort {
    margin-left: 10px;
    svg {
      display: block;
    }

    svg.icon_color_active {
      & > rect {
        fill: var(--color-icon-active);
      }
    }

    &.uth-cell-sort-asc {
      // transform: scale(1, 1);
    }
    &.uth-cell-sort-desc {
      transform: scale(1, -1);
    }
  }
}

.ui-table--check .uth {
  .uth-th:first-child {
    width: 50px;
  }
}

.ui-table--hover-action .uth {
  // предпоследний элемент
  .uth-th:nth-last-child(-n + 2) {
    padding-right: 12px;
  }

  .uth-th:last-child {
    display: none;
  }
}
</style>
