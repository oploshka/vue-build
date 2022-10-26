<script>

export default {
  name: 'LoadPageV2Mixin',
  data() {
    return {
      loadingPage: {
        status: 'INIT', // INIT LOADING SUCCESS ERROR
        loadFuncObj: {},
      },
    };
  },
  methods: {
    loadPageFuncAdd(name, func) {
      if(this.loadingPage.loadFuncObj[name]) {
        console.warn('[LoadPageMixin] add duplicate load function');
      }
      this.loadingPage.loadFuncObj[name] = func;
    },
    loadPageFuncRedefine(name, func) {
      this.loadingPage.loadFuncObj[name] = func;
    },
    loadPageFuncDelete(name, func) {
      this.loadingPage.loadFuncObj[name] = func;
    },

    // callback
    loadPageSuccess() {},
    loadPageError() {},
    //
    loadPageStart() {
      //
      if(this.loadingPage.status === 'LOADING') { return; }
      this.loadingPage.status = 'LOADING';

      const requestList = [];
      for(let key in this.loadingPage.loadFuncObj) {
        requestList.push({name: key, func: this.loadingPage.loadFuncObj[key] })
      }

      if (!requestList.length) {
        this.loadingPage.status = 'SUCCESS';
        return;
      }

      const promiseList = [];
      for (let i = 0; i < requestList.length; i++) {
        const funcReq = requestList[i].func;
        const promiseFuncReq = funcReq();
        promiseList.push(promiseFuncReq);
      }

      return Promise.all(promiseList).then(
        () => {
          this.loadingPage.status = 'SUCCESS';
          this.loadPageSuccess();
        },
        (error) => {
          console.error(error);
          this.loadingPage.status = 'ERROR';
          this.loadPageError();
        }
      );
    },

  },
  mounted() {
    this.loadPageStart();
  },
};
</script>

<style scoped lang="scss"></style>
