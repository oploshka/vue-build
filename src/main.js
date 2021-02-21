import Vue from 'vue';

// глобально инитим классы
import '@enum';
import '@entity';

// глобально инитим константу CONST
import '@/core/constGlobal.js';

// Library
import '@library/dayjs';

// глобальный реквест менеджер
import '@service/RequestManager';

// дефолтный импорт
import App    from '@layout';
import store  from '@store';
import router from '@router';

// filter
import '@/core/filter';

// Plugins
// import '@plugin/bootstrap-vue';
// import '@plugin/v-slim-dialog';
// import '@plugin/vue-js-modal';
// import '@plugin/element-ui';
// import '@plugin/vue-suggestion';
// import '@plugin/vue-click-outside';
// import '@plugins/v-mask';

import '@permission/init';

// глобальные стили
import '@style/init.scss';

Vue.config.productionTip = false;

global.Vue = Vue;
global.VueApp = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
