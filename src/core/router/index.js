import { createRouter, createWebHistory } from 'vue-router';
// import * as $routeName from '@router/variable'; TODO correct way to add $routeName to Vue instance prototype
import { routePrepare } from '@router/function/routePrepare';

import routeBase      from './group/base';
import routeEmail     from './group/email';
import routeGroupUser from '@user/page/routeGroupUser';
import routeSystem    from '@router/page/routeGroupSystem';

let routeList = [
  routeBase,
  routeEmail,
  routeGroupUser,
  routeSystem,
];

// Test routes
import routeGroupTest from '@test/page/routeGroupTest';
if (process.env.NODE_ENV === 'development') {
  routeList.push(routeGroupTest);
}
//

const routes = [];
for(let i = 0; i < routeList.length; i++){
  for(let j = 0; j < routeList[i].length; j++){
    routes.push(routePrepare(routeList[i][j]));
  }
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
