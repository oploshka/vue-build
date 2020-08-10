import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routeDefault     from './group/base/index';
import routeTestVueMap  from './group/test/vueMap.js';

let routeList = [
  routeDefault,
  routeTestVueMap,
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
  routes
});

export default router;
