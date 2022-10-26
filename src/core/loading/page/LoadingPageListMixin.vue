<script>

import LoadingPageMixin from '@loading/page/LoadingPageMixin';

//
import LoadingPageListBlock from '@loading/page/LoadingPageListBlock';
import UiPageList from '@component/UiPage/PageList/UiPageList';

import {isEmpty} from 'lodash';

export default {
  name: 'LoadingPageListMixin',
  mixins: [ LoadingPageMixin ],
  components: {
    UiPageList,
    LoadingPageListBlock,
  },
  props: {
    // TODO: add props (filter, pagination, sort, view)
  },
  data() {
    return {
      // TODO: додумать (берется из LoadingPageMixin)
      // loadingPage: {
      //   status: 'LOADING'
      // },
      filter: this.getFilterDefault(),
      pagination: {
        pageNumber: 0,    // Номер страницы (1,2,3)
        pageSize:   15,   // Количество элементов на страницу
      },
      sort: {},
      // данные с бека
      response: {
        list: [],
        //
        pageCount:  0,
        pageSize:   0,
        totalCount: 0,
      },
      view: 'ROW', // Как будет выглядеть 'ROW', 'CARD', 'SCHEME'
    };
  },

  methods: {
    getFilterDefault() {
      return { search: '' };
    },
    filterToRequest(filter){
      // const requestFilter = {};
      //
      // if (filter && filter.search) {
      //   requestFilter.value = { LIKE: filter.search };
      // }
      //
      // return requestFilter;
      return {};
    },
    sortToRequest(sort){
      let requestSort = {id: 'ASC'};

      if (sort && sort.name) {
        requestSort = { [sort['name']]: (sort['order'] || 'asc').toUpperCase() };
      }

      return requestSort;
    },

    getRequestFunction(){
      // return RequestManager.Employee.getList
      return null;
    },

    // Не нужно переопределять
    getRequestObject(){
      const reqPayload = {
        page: this.pagination.pageNumber,
        size: this.pagination.pageSize,
      };
      // сортировка
      const sortRequest = this.sortToRequest(this.sort);
      if(sortRequest && !isEmpty(sortRequest)) {
        reqPayload.sort = sortRequest;
      }
      //
      const filterRequest = this.filterToRequest(this.filter);
      if(filterRequest && !isEmpty(filterRequest)) {
        reqPayload.filter = filterRequest;
      }

      return reqPayload;
    },
    //
    paginationReset(){
      this.pagination.pageNumber = 0;
      this.listLoad();
    },
    paginationNext(){
      this.pagination.pageNumber++;
      this.listLoad();
    },
    paginationPrev(){
      if (this.pagination.pageNumber < 1) {
        return;
      }
      this.pagination.pageNumber--;
      this.listLoad();
    },
    updatePageSize(value){
      this.pagination.pageNumber  = 0;
      this.pagination.pageSize    = value;
      this.listLoad();
    },
    //
    sortUpdate(sort) {
      this.sort = sort;
      this.listLoad();
    },
    //
    filterUpdate(newFilter) {
      this.filter = {...this.filter, ...newFilter};
      this.paginationReset();
    },
    loadError(err) {
      console.error(err);
      this.response.list          = [];
      this.response.pageCount     = 0;
      this.response.pageSize      = 0;
      this.response.totalCount    = 0;
      this.response.loadingStatus = 'ERROR';
    },
    listLoad() {
      const getListRequestObj = this.getRequestObject();
      const RmRequestFunc = this.getRequestFunction();

      this.response.list          = [];
      this.response.pageCount     = 0;
      this.response.pageSize      = 0;
      this.response.totalCount    = 0;
      this.response.loadingStatus = 'LOADING';

      const request = RmRequestFunc(getListRequestObj)

      request.then(
        (res) => {
          this.response.list    = res.list;
          //
          this.response.pageCount     = res.pageCount;
          this.response.pageSize      = res.pageSize;
          this.response.totalCount    = res.totalCount;
          //
          this.response.loadingStatus = 'SUCCESS';
        },
        this.loadError
      ).catch(this.loadError);

      return request;
    }
  },
};
</script>

<style scoped lang="scss">
</style>
