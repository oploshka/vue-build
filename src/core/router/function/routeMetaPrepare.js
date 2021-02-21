import $store from "@store/index";
import * as pageName from "@router/variable";

// проверка авторизованности пользователя
export const ifAuthenticated = (to, from, next) => {
  if ($store.getters.isAuth) {

    // let tokenInfo = $store.getters.getTokenInfo;
    // if (tokenInfo.resetedPassword) {
    //   next({ name: pageName.TEMP_PASSWORD_RESET });
    //   return;
    // }

    next();
    return;
  }
  next({ name: pageName.HOME });
};

export const ifNotAuthenticated = (to, from, next) => {
  if (!$store.getters.isAuth) {
    next();
    return;
  }
  next({ name: pageName.HOME });
};

export const ifPagePasswordReset = (to, from, next) => {
  if ($store.getters.isAuth) {

    let tokenInfo = $store.getters.getTokenInfo;
    if (tokenInfo.resetedPassword) {
      next();
      return;
    }
  }
  next("/");
};



// TODO: fix routeInfo.children
// TODO: fix beforeEnter multi function
export const routeMetaPrepare = (routeInfo) => {
  const meta = routeInfo.meta || {};

  switch (meta.auth) {
    case "AUTH":
      routeInfo.beforeEnter = ifAuthenticated;
      break;
    case "NOT_AUTH":
      routeInfo.beforeEnter = ifNotAuthenticated;
      break;
    case "PAGE_PASSWORD_RESET":
      routeInfo.beforeEnter = ifPagePasswordReset;
      break;
    case "ALL":
    default:
      break;
  }

  if( !meta.layout ){
    meta.layout = 'DEFAULT';
  }

  const children = routeInfo.children || [];
  for(let i = 0; i < children.length; i++) {
    routeInfo.children[i] = routeMetaPrepare(children[i]);
  }

  routeInfo.meta = meta;
  return routeInfo;
};
