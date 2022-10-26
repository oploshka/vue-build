<script>
import LoadingPageTemplate from '@loading/page/LoadingPageTemplate';

export default {
  name: 'LoadPageMixin',
  components: {
    LoadingPageTemplate,
  },
  data() {
    return {
      loadingPage: {
        status: 'LOADING',
      },
    };
  },
  methods: {
    // loadDictionary() {
    //   return [];
    // },
    loadData() {
      return [];
    },
    loadPage(fn = () => {}) {
      // const requestList1 = this.loadDictionary();
      this.loadingPage.status = 'LOADING';
      const requestList = this.loadData();

      if (!requestList.length) {
        this.loadingPage.status = 'SUCCESS';
        return;
      }

      const promiseList = [];
      for (let i = 0; i < requestList.length; i++) {
        const funcReq = requestList[i];
        const promiseFuncReq = funcReq();
        promiseList.push(promiseFuncReq);
      }

      return Promise.all(promiseList).then(
        () => {
          fn();
          this.loadingPage.status = 'SUCCESS';
        },
        () => {
          this.loadingPage.status = 'ERROR';
        }
      );
    },
  },
  mounted() {
    this.loadPage();
  },
};
</script>

<style scoped lang="scss"></style>
