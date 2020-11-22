import Vue from 'vue';

// Library
import '@/core/library/dayjs';

import '@/core/enum';
import '@/core/entity';         // глобально инитим классы
import '@/core/constGlobal.js'; // глобально инитим константу CONST

import '@/services/request/RequestManagerGlobal'; // глобальный реквест менеджер

// дефолтный импорт
import App    from '@/core/layout';
import router from '@/core/router';
import store  from '@/core/store';

// Filter
import '@/core/filter';

// Plugins
import '@/core/plugin/bootstrap-vue';
import '@/core/plugin/v-slim-dialog';
import '@/core/plugin/vue-js-modal';
import '@/core/plugin/element-ui';
import '@/core/plugin/vue-suggestion';
import '@/core/plugin/vue-click-outside';

// глобальные стили
import '@style/init.scss';

Vue.config.productionTip = false;

global.Vue = Vue;
global.VueApp = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
