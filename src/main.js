import Vue from 'vue';

import '@/core/init/setting.js';
import '@/core/init/const.js';
import store from '@/core/init/store';

import App    from '@/core/init/layout.vue';
import router from '@/core/router';

Vue.config.productionTip = false;

global.Vue = Vue;
global.VueApp = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
