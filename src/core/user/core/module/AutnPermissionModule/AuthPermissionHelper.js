
import * as PERMISSION from '@permission/Permission';
import * as PAGE from '@router/variable';

export const getDefaultAuthPermission = () => {
  return {
    [PERMISSION.ALL]:   true,
    [PERMISSION.AUTH]:  true,
  };
};

export const getDefaultAnonymousPermission = () => {
  return {
    [PERMISSION.ALL]:       true,
    [PERMISSION.ANONYMOUS]: true,
  };
};

export const updateReactivePermission = (permission, newPermission) => {
  for(let key in permission) {
    if(!newPermission[key]) {
      delete permission[key];
    }
  }
  for(let key in newPermission) {
    if(!permission[key]) {
      permission[key] = true;
    }
  }
};


export const getUserPermission = (token, tokenInfo) => {
  if(!token) {
    return getDefaultAnonymousPermission();
  }

  const tokenPermissionArray  = tokenInfo['itam-role'] || [];
  const tokenPermissionObject = {};
  for(let i = 0; i < tokenPermissionArray.length; i++) {
    tokenPermissionObject[ tokenPermissionArray[i] ] = true;
  }

  const permissionAuthDefault = getDefaultAuthPermission();
  return { ...permissionAuthDefault, ...tokenPermissionObject };
};



const permissionAuthPage = {
  [PERMISSION.NAV_MAIN]       : PAGE.HOME,
};
const permissionAuthPriority = [
   PERMISSION.NAV_MAIN,
   PERMISSION.NAV_SERVICE,
   PERMISSION.NAV_CONTRACT,
   PERMISSION.NAV_ASSET,
   PERMISSION.NAV_REPORT,
   PERMISSION.NAV_DICTIONARY,
   PERMISSION.NAV_SETTINGS,
];

export const getUserAuthHomePage = (permissionObj) => {
  for(let i = 0; i < permissionAuthPriority.length; i++) {
    const permName = permissionAuthPriority[i];
    if(permissionObj[permName]) {
      return permissionAuthPage[permName];
    }
  }
  return null;
};
