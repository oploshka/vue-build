import Vue from 'vue';

let loading = Vue.observable([]);


let _requestCount = 1;
const getRequestId = () => {
  let requestId = _requestCount;
  _requestCount++;
  return requestId;
};

// mutations
const setLoading = (id)=> {
  loading.push(id);
};

const unsetLoading = (id)=> {
  // TODO: test reactive
  const filter = loading.filter(i => i !== id);
  loading = filter;
};

// TODO: getRequestId убрать дубли
export default {
  isLoading() {
    return loading.length > 0;
  },
  // actions
  addRequest(request) {
    let requestId = getRequestId();
    setLoading('', requestId);
    request.finally( () => {
      unsetLoading(requestId);
    });
  },
};


