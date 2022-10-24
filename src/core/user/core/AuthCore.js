import { getAuthInfo, setAuthInfo } from '@user/core/AuthBrowserStorage';
import AuthGetTokenInfo from '@user/core/AuthGetTokenInfo';
// module
import AuthProfileModule from '@user/core/module/AuthProfileModule';
import AuthBaseModule from '@user/core/module/AuthBaseModule';
import AuthPermissionModule from '@user/core/module/AutnPermissionModule/AuthPermissionModule';
import { getUserAuthHomePage, getUserPermission } from '@user/core/module/AutnPermissionModule/AuthPermissionHelper';

// // Набор похожих функций
// const setToken = async (newToken) => {};
// const setTokenAndTokenInfo = async (newToken, newTokenInfo) => {}; // это скорее всего полная копия update
// const init = async () => {}; // реализовано ниже

// TODO: переписать с учетом предыдущего токена и разделением по ролям
const update = async (token, tokenInfo) => {
  try {
    if (token && !tokenInfo) {
      // TODO: вынести отдельно валидацию
      tokenInfo = await AuthGetTokenInfo(token);
    }
  } catch (e) {
    // не удалось распознать токен
    token = null;
    tokenInfo = null;
  }

  let permissionObj = getUserPermission(token, tokenInfo);
  let homePage = null;
  if (token) {
    homePage = getUserAuthHomePage(permissionObj);
    if (!homePage) {
      token = null;
      tokenInfo = null;
      permissionObj = getUserPermission(token, tokenInfo);
    }
  }

  setAuthInfo(token);
  // modules
  AuthBaseModule.update(token, tokenInfo, permissionObj);
  await AuthProfileModule.update(token, tokenInfo, permissionObj);
  AuthPermissionModule.update(token, tokenInfo, permissionObj);

  return {
    homePage: homePage,
  };
};

const init = async () => {
  //
  let token = null;
  let tokenInfo = null;

  // считываем данные токена
  token = getAuthInfo();

  // if(!token){
  //   return User;
  // }

  await update(token, tokenInfo);

  const $user = {
    update: update,
    ...AuthBaseModule.methods,
    ...AuthProfileModule.methods,
    ...AuthPermissionModule.methods,
  };
  return $user;
};

export default init;
