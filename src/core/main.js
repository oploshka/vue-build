
import { createApp } from 'vue';

// глобальные библиотеки
import '@library/dayjs';

// глобальные классы
import '@entity';

// перечисления
import $enum from '@enum';

// глобально инитим константу CONST
import $config from '@config';

// service
import $requestManager from '@service/RequestManager';

import $plugin from '@plugin';

// Пользователь
//   TODO: это нужно запустить как можно раньше (оптимизировать)
import userInitFunc from '@user/init';

// дефолтный импорт
import '@core/layout/init';
import App    from '@layout/Layout';
import router from '@core/router';
import * as $routeName from '@router/variable';


global.ENUM           = $enum;
global.CONFIG         = $config;
global.RequestManager = $requestManager;

// глобальные стили
import '@style/index.scss';

userInitFunc().then(($user) => {
  global.USER = $user;

  // 1. Assign app to a variable
  const app = createApp(App);

  // 2. Assign the global variable before mounting
  app.config.globalProperties.$enum       = $enum;
  app.config.globalProperties.$config     = $config;
  app.config.globalProperties.$user       = $user;
  app.config.globalProperties.$routeName  = $routeName;

  // 3. Use router and mount app
  $plugin(app);
  app.use(router);

  global.VueApp = app.mount('#app');

});
