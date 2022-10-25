import { createRouter, createWebHistory } from 'vue-router'
// import * as $routeName from '@router/variable'; TODO correct way to add $routeName to Vue instance prototype
import { routePrepare } from '@core/router/routePrepare';


const routes = [];
const addRoutes = (routeList) => {
  for(let i = 0; i < routeList.length; i++){
    for(let j = 0; j < routeList[i].length; j++){
      routes.push(routePrepare(routeList[i][j]));
    }
  }
};

// add user routes
import routeList from '@router/routeList';
addRoutes(routeList);

// add system routes
import routeSystem    from '@router/page/routeGroupSystem';
let routeListAdditional = [
  routeSystem,
];

// Test routes
import routeGroupTest from '@test/page/routeGroupTest';
if (process.env.NODE_ENV === 'development') {
  routeListAdditional.push(routeGroupTest);
}
addRoutes(routeListAdditional);


//
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
});

//
import {routerPageLoading} from '@core/router/router.store';
router.beforeEach((to, from, next) => {
  routerPageLoading.value = true;
  next();
});
router.afterEach(() => {
  routerPageLoading.value = false;
});
//

export default router;
