import Vue from 'vue';
import VueRouter from 'vue-router';
import * as $routeName from '@router/variable';
import { routePrepare } from '@router/function/routePrepare';

Vue.prototype.$routeName = $routeName;

// user
import routeUser        from '@user/page/routeGroupUser';
//
import routeBase     from './group/base';
//
import routeSystem      from '@router/page/routeGroupSystem';

Vue.use(VueRouter);

let routeList = [
  // custom
  routeBase,
  // user
  routeUser,
  //
  routeSystem,
];

const routes = [];
for(let i = 0; i < routeList.length; i++){
  for(let j = 0; j < routeList[i].length; j++){
    routes.push(routePrepare(routeList[i][j]));
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
