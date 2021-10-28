<template>
  <div class="load-block">
    <template v-if="loadStatus === LOAD_STATUS_CREATE">
      <div></div>
    </template>
    <template v-else-if="loadStatus === LOAD_STATUS_LOAD">
      <LoadingBar
        :loading="true"
        color="linear-gradient(135deg, rgba(245,172,28,0) 0%, rgba(245,172,28,1) 10%, rgba(245,172,28,1) 90%, rgba(245,172,28,0) 100%)"
      />
    </template>
    <template v-else-if="loadStatus === LOAD_STATUS_ERROR">
      <div>По Вашему запросу ничего не найдено</div>
      <div>{{errorData}}</div>
    </template>
    <template v-else-if="loadStatus === LOAD_STATUS_SUCCESS">
      <template v-if="isEmpty">
        <div>По Вашему запросу ничего не найдено</div>
      </template>
      <template v-else>
        <slot/>
      </template>
    </template>

  </div>
</template>

<script>

const LOAD_STATUS_CREATE    = 'create';
const LOAD_STATUS_LOAD      = 'load';
const LOAD_STATUS_SUCCESS   = 'success';
const LOAD_STATUS_ERROR     = 'error';

import LoadingBar from "@widgetLoader/LoadingBar";

export default {
  name: "LoadBlock",
  components: {
    LoadingBar,
  },
  data() {
    return {
      LOAD_STATUS_CREATE : LOAD_STATUS_CREATE ,
      LOAD_STATUS_LOAD   : LOAD_STATUS_LOAD   ,
      LOAD_STATUS_SUCCESS: LOAD_STATUS_SUCCESS,
      LOAD_STATUS_ERROR  : LOAD_STATUS_ERROR  ,

      loadStatus: LOAD_STATUS_CREATE,
      loadData  : null,
      errorData : null,
    }
  },
  props:{
    loadFunction: {
      type: Function,
      required: true
    },
    isEmptyFunction: {
      type: Function,
      default: (v) => {
        return !v
      }
    },
  },
  methods: {
    setSuccess(data) {
      this.loadData   = data;
      this.loadStatus = LOAD_STATUS_SUCCESS;
      //
      return data;
    },
    setError(err) {
      this.loadData   = null;
      this.errorData   = err;
      this.loadStatus = LOAD_STATUS_ERROR;
      //
      return err;
    },
    //
    load(){
      this.loadStatus = LOAD_STATUS_LOAD;
      return this.loadFunction(...arguments)
        .then(this.setSuccess, this.setError)
        // .catch( );
    }
  },
  computed: {
    isEmpty() {
      return this.isEmptyFunction(this.loadData)
    }
  }
};
</script>

<style scoped lang="scss">
</style>
