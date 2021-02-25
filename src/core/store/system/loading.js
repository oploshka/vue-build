
let _requestCount = 1;
const getRequestId = () => {
  let requestId = _requestCount;
  _requestCount++;
  return requestId;
};

export default {
  namespaced: true,
  state: {
    loading: [],
  },
  getters: {
    isLoading(state) {
      return state.loading.length > 0;
    },
  },
  mutations: {
    setLoading(state, id) {
      state.loading.push(id);
    },
    unsetLoading(state, id) {
      const filter = state.loading.filter(i => i !== id);
      state.loading = filter;
    },
  },
  actions: {
    async addRequest({ commit }, request) {
      let requestId = getRequestId();
      await commit('setLoading', requestId);
      request.finally( () => {
        commit('unsetLoading', requestId);
      });
    },
  },
};
