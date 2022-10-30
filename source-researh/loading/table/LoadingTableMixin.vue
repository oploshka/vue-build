
<script>

import {isEmpty} from 'lodash';

export default {
  name: 'LoadingTableMixin',
  data() {

    const table = this.tableGetInitObject();
    this.tableInitObjectPrepare(table);

    return {
      table: table,
    };
  },
  methods: {
    // данные для таблицы
    tableInitObjectPrepare(tableObj) {
      // tableObj.pagination.pageSize = 9999;
    },
    tableFieldSchema() {
      return [
        // { id: 'email',     name: 'E-mail',  sort: true  },
        // //
        // { id: 'action',    name: '',        sort: false  }, // Действия
      ];
    },
    tableFilterDefault() {
      return {}; // { search: '' }
    },
    tableFilterToRequest(filter){
      // const requestFilter = {};
      //
      // if (filter && filter.search) {
      //   requestFilter.value = { LIKE: filter.search };
      // }
      //
      // return requestFilter;
      return {};
    },
    tableSortToRequest(sort){
      let requestSort = {id: 'ASC'};

      if (sort && sort.name) {
        // add logic
        // requestSort = sort;
        requestSort = { [sort['name']]: (sort['order'] || 'asc').toUpperCase() };
      }

      return requestSort;
    },
    tableGetRequestFunction(){
      // return RequestManager.Employee.getList
      return null;
    },

    // Не нужно переопределять
    tableGetInitObject() {
      return {
        // check: { all: false, element: {}, },
        field: this.tableFieldSchema(),
        filter: this.tableFilterDefault(),
        pagination: {
          pageNumber: 0,    // Номер страницы (1,2,3)
          pageSize:   15,   // Количество элементов на страницу
        },
        sort: {},
        // данные с бека
        data: {
          loadingStatus: 'LOADING', // LOADING | SUCCESS | ERROR
          list: [],
          //
          pageCount:  0,
          pageSize:   0,
          totalCount: 0,
        },
        view: 'ROW', // Как будет выглядеть 'ROW', 'CARD', 'SCHEME'
      };
    },

    tableUpdateView(viewName) {
      this.table.view  = viewName;
    },

    tableGetRequestObject(){
      const reqPayload = {
        page: this.table.pagination.pageNumber,
        size: this.table.pagination.pageSize,
      };
      // сортировка
      const sortRequest = this.tableSortToRequest(this.table.sort);
      if(sortRequest && !isEmpty(sortRequest)) {
        reqPayload.sort = sortRequest;
      }
      //
      const filterRequest = this.tableFilterToRequest(this.table.filter);
      if(filterRequest && !isEmpty(filterRequest)) {
        reqPayload.filter = filterRequest;
      }

      if(this.tableGetRequestObjectPrepare) {
        this.tableGetRequestObjectPrepare(reqPayload);
      }
      return reqPayload;
    },
    //
    tablePaginationReset(){
      this.table.pagination.pageNumber = 0;
      this.tableLoad();
    },
    tablePaginationNext(){
      this.table.pagination.pageNumber++;
      this.tableLoad();
    },
    tablePaginationPrev(){
      if (this.table.pagination.pageNumber < 1) {
        return;
      }
      this.table.pagination.pageNumber--;
      this.tableLoad();
    },
    tableUpdatePageSize(value){
      this.table.pagination.pageNumber  = 0;
      this.table.pagination.pageSize    = value;
      this.tableLoad();
    },
    //
    tableSortUpdate(sort) {
      this.table.sort = sort;
      this.tableLoad();
    },
    //
    tableFilterUpdate(newFilter) {
      this.table.filter = {...this.table.filter, ...newFilter};
      this.tablePaginationReset();
    },
    tableLoadError(err) {
      console.error(err);
      this.table.data.list          = [];
      this.table.data.pageCount     = 0;
      this.table.data.pageSize      = 0;
      this.table.data.totalCount    = 0;
      this.table.data.loadingStatus = 'ERROR';
    },
    tableLoad() {
      const getListRequestObj = this.tableGetRequestObject();
      const RmRequestFunc = this.tableGetRequestFunction();

      this.table.data.list          = [];
      this.table.data.pageCount     = 0;
      this.table.data.pageSize      = 0;
      this.table.data.totalCount    = 0;
      this.table.data.loadingStatus = 'LOADING';

      const request = RmRequestFunc(getListRequestObj);

      request.then(
        (res) => {
          this.table.data.list    = res.list;
          //
          this.table.data.pageCount     = res.pageCount;
          this.table.data.pageSize      = res.pageSize;
          this.table.data.totalCount    = res.totalCount;
          //
          this.table.data.loadingStatus = 'SUCCESS';
        },
        this.tableLoadError
      ).catch(this.tableLoadError);

      return request;
    }
  },
};

</script>

<style scoped lang="scss">

</style>
