<script>

const LOAD_STATUS_CREATE    = 'create';
const LOAD_STATUS_LOAD      = 'load';
const LOAD_STATUS_SUCCESS   = 'success';
const LOAD_STATUS_ERROR     = 'error';

export default {
  name: "LoadPageMixin",
  data() {
    return {
      LOAD_STATUS_CREATE : LOAD_STATUS_CREATE ,
      LOAD_STATUS_LOAD   : LOAD_STATUS_LOAD   ,
      LOAD_STATUS_SUCCESS: LOAD_STATUS_SUCCESS,
      LOAD_STATUS_ERROR  : LOAD_STATUS_ERROR  ,

      loadStatus: LOAD_STATUS_CREATE,
      loadData  : null,
      errorData : null,
    };
  },
  methods: {
    setSuccess(data) {
      this.loadData   = data;
      this.loadStatus = LOAD_STATUS_SUCCESS;
    },
    setError(err) {
      this.loadData   = null;
      this.errorData   = err;
      this.loadStatus = LOAD_STATUS_ERROR;
    },
    //
    load(){
      this.loadStatus = LOAD_STATUS_LOAD;
      return this.loadFunction(...arguments)
        .then(this.setSuccess)
        .catch( this.setError);
    }
  },
  computed: {
    isEmpty() {
      return this.isEmptyFunction(this.loadData);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
