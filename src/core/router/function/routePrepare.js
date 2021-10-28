import * as pageName from "@router/variable";
// import * as roleName from '@permission/roleName';
import permissionMethod from "@permission/permissionMethod";

// route check access
export const checkAccess = (to, from, next) => {
  checkAccessRoute(to, next);
};

export const checkAccessRoute = (route, next) => {
  const accessObject = route.meta.permission;
  if (accessObject === null) {
    next(); return;
  }

  const userRoleList = global.User.Role.getRoleList();

  const access = permissionMethod.accessObject(accessObject, userRoleList);

  if(access) {
    next(); return;
  }

  // TODO: fix redirect
  let redirect  = { name: pageName.NOT_ACCESS }; // 403
  if( global.User.isAuth() ) {
    // пользователь авторизован
    redirect = { name: pageName.HOME };
  } else {
    // пользователь не авторизован
    // TODO: fix
    // redirect = { name: pageName.NOT_ACCESS };
    redirect = { name: pageName.AUTH };
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
