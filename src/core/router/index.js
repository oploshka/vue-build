import Vue from 'vue';
import VueRouter from 'vue-router';

import routeDefault     from './group/base/index';
import routeSystem      from './group/system/index';
import routeTest        from './group/test/index'; // TODO: use for develop

Vue.use(VueRouter);

let routeList = [
  routeDefault,
  routeSystem,
  routeTest,
];

const routes = [];
for(let i = 0; i < routeList.length; i++){
  for(let j = 0; j < routeList[i].length; j++){
    routes.push(routeList[i][j]);
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
