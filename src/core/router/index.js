import Vue from 'vue';
import VueRouter from 'vue-router';
import * as $routeName from '@router/variable';
import {routeMetaPrepare} from '@router/function/routeMetaPrepare';

Vue.prototype.$routeName = $routeName;
Vue.use(VueRouter);

import routeDefault     from './group/base';
import routeSystem      from './group/system';
import routeTest        from './group/test'; // TODO: use for develop

let routeList = [
  routeDefault,
  routeSystem,
  routeTest,
];

const routes = [];
for(let i = 0; i < routeList.length; i++){
  for(let j = 0; j < routeList[i].length; j++){
    routes.push( routeMetaPrepare(routeList[i][j]) );
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      // document.getElementById('app').scrollTo(0, 0);
      return { x: 0, y: 0 };
    }
  }
});

export default router;
