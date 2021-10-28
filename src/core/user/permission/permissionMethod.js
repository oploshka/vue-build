import permissionSetting from "@permission/permissionSetting";
import * as ROLE from '@permission/roleName';

const permissionSiteAccess = {
  [ROLE.ROLE_ADMIN  ] : true,
};

export default {
  access(permissionName, userRoleList) {
    if( !Object.prototype.hasOwnProperty.call(permissionSetting, permissionName) ){
      console.error('[Class Permission] not init permission settings', permissionName);
      return false;
    }
    let permission = permissionSetting[permissionName];

    let access = false;
    for (let i = 0; i < userRoleList.length; i++){
      let roleName = userRoleList[i];

      if(Object.prototype.hasOwnProperty.call(permission, roleName) && permission[roleName]){
        access = true;
        break;
      }
    }

    return access;
  },

  accessObject(accessObject, userRoleList) {
    for(let i = 0; i < userRoleList.length; i++){
      let role = userRoleList[i];

      if(accessObject[role]) {
        return true;
      }
    }

    return false;
  },

  clearRoleList(roleList) {
    return roleList.filter(role => permissionSiteAccess[role] );
  },
};
