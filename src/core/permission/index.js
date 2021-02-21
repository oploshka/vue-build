import permissionSetting from "@permission/permissionSetting";
import $store from '@store';
import {ROLE_ANONYMOUS, ROLE_AUTH} from "@permission/roleName";

// let instance;

class Permission{
  #permissionSetting = {};

  constructor(permissionSetting){
    // if(instance){
    //   return instance;
    // }
    // instance = this;

    this.#permissionSetting = permissionSetting;
  }

  updateUserRoleAuto(){

    if (!$store.getters.isAuth) {
      this.setUserRole([ROLE_ANONYMOUS]);
      return;
    }

    const roleList = [ROLE_AUTH];


    // TODO: fix
    let isOpenKKM = $store.getters.isOpenSession;

    for(let i = 0; i < $store.getters.userRoles.length; i++) {
      //
      if ($store.getters.userRoles[i]) {

        roleList.push($store.getters.userRoles[i]);

        if( isOpenKKM ) {
          roleList.push($store.getters.userRoles[i] + '+kkm');
        }
      }
    }

    this.setUserRole(roleList);
  }

  setUserRole(userRoleList){
    $store.dispatch('setUserRoleList', userRoleList);
  }
  getUserRole(){
    return $store.getters.getUserRoleList;
  }
  access(permissionName) {
    if( !Object.prototype.hasOwnProperty.call(this.#permissionSetting, permissionName) ){
      console.error('[Class Permission] not init permission settings', permissionName)
      return false;
    }
    let permission = this.#permissionSetting[permissionName];
    let userRoleList = $store.getters.getUserRoleList;

    let access = false;

    for (let i = 0; i < userRoleList.length; i++){
      let roleName = userRoleList[i];

      if(Object.prototype.hasOwnProperty.call(permission, roleName) && permission[roleName]){
        access = true;
        break;
      }
    }

    return access;
  }

}

if(!global.___PermissionClass){
  global.___PermissionClass = new Permission(permissionSetting);
}

export default global.___PermissionClass;
