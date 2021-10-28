import Vue from 'vue';

// глобально инитим классы
import '@enum';
import '@entity';

// глобально инитим константу CONST
import '@/core/config';

// Library
import '@library/dayjs';

// глобальный реквест менеджер
import '@service/RequestManager';

// дефолтный импорт
import App    from '@/core/layout';
import router from '@/core/router';
// import store  from '@/core/store'; // TODO ... подумать

// filter
import '@/core/filter';

// Пользователь
//   TODO: это нужно запустить как можно раньше (оптимизировать)
import userInitFunc from '@user/init';

// Plugins
// import '@plugin/bootstrap-vue';
// import '@plugin/v-slim-dialog';
// import '@plugin/vue-js-modal';
// import '@plugin/element-ui';
// import '@plugin/vue-suggestion';
// import '@plugin/vue-click-outside';
// import '@plugins/v-mask';

import '@plugin/vue-form-element';
import '@plugin/vue-dlg';

// глобальные стили
import '@style/init.scss';

Vue.config.productionTip = false;

console.info('VERSION: ' + Vue.prototype.$ENUM.VERSION);

global.Vue = Vue;

userInitFunc().then((User) => {

  /**
   * @type {typeof UserClassExample}
   */
  global.User = User;


  /**
   * @type {typeof UserClassExample}
   */
  Vue.prototype.$user = User;

  global.VueApp = new Vue({
    router,
    // store,
    render: (h) => h(App),
  }).$mount('#app');

});
