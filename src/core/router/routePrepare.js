import * as pageName from '@router/variable';

// route check access
export const checkAccess = (to, from, next) => {
  // next();
  checkAccessRoute(to, next);
};

export const checkAccessRoute = (route, next) => {
  // отключение проверки прав доступа
  if(process.env.VUE_APP_ROUTER_PERMISSION_DISABLE === 'ROUTER_PERMISSION_DISABLE') {
    next(); return;
  }

  const permissionName = route.meta.permissionV2;
  if (!permissionName) {
    next(); return;
  }

  const access = global.USER.access(permissionName);
  // const access = true;

  if(access) {
    next(); return;
  }

  // TODO: fix redirect
  let redirect  = { name: pageName.NOT_ACCESS }; // 403
  if( global.USER.isAuth() ) {
    // пользователь авторизован
    const redirectPageName = global.USER.getAuthRedirectPage();
    if(!redirectPageName) {
      console.error('[ERROR] permission redirectPageName!!!');
    }
    redirect = { name: redirectPageName };
  } else {
    // пользователь не авторизован
    // TODO: fix
    // redirect = { name: pageName.NOT_ACCESS };
    redirect = { name: pageName.USER_AUTH };
  }
  next(redirect);
};

function isObject (item) {
  return (typeof item === "object" && !Array.isArray(item) && item !== null);
}

// TODO: fix routeInfo.children
// TODO: fix beforeEnter multi function
export const routePrepare = (routeInfo) => {
  routeInfo.meta            = routeInfo.meta || {};
  routeInfo.meta.layout     = routeInfo.meta.layout || 'DEFAULT';

  routeInfo.meta.permission = routeInfo.meta.permission || null;
  routeInfo.meta.permissionV2 = routeInfo.meta.permissionV2 || null;
  // TODO: fix
  // routeInfo.meta.permission = routeInfo.meta.permission || [];
  // if(typeof routeInfo.meta.permission === 'string') {
  //   routeInfo.meta.permission = [routeInfo.meta.permission];
  // }
  // if( isObject(routeInfo.meta.permission) ) {
  //   let p = routeInfo.meta.permission;
  //   routeInfo.meta.permission = [];
  //   for(let key in p){
  //     if(p[key]) {
  //       routeInfo.meta.permission.push(key);
  //     }
  //   }
  // }
  routeInfo.beforeEnter = checkAccess;


  const children = routeInfo.children || [];
  for(let i = 0; i < children.length; i++) {
    routeInfo.children[i] = routePrepare(children[i]);
  }

  return routeInfo;
};
