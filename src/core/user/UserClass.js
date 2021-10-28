//
import AuthClass from "@user/class/AuthClass";
import RoleClass from "@user/class/RoleClass";
import ProfileClass from "@user/class/ProfileClass";
//
import PermissionMethod from "@permission/permissionMethod";
import {ROLE_ANONYMOUS, ROLE_AUTH} from "@permission/roleName";
//
// import BrowserStorage from "@user/helper/BrowserStorage";
// import jwtDecode from "jwt-decode";
import permissionMethod from "@permission/permissionMethod";

//
const Auth    = AuthClass.methods;
const Role    = RoleClass.methods;
const Profile = ProfileClass.methods;
// const Kkm     = KkmClass.methods;

const UserClass = function () {
  const isAuth = () => {
    return !!Auth.getToken();
  };


  /**
   * @name UserClassExample
   */
  const retObj = {
    Auth    : Auth,
    Role    : Role,
    Profile : Profile,
    // Kkm     : Kkm,

    // action
    isAuth: isAuth,

    access(permissionName) {
      let userRoleList = isAuth() ? [ROLE_AUTH] : [ROLE_ANONYMOUS];
      userRoleList = userRoleList.concat(Role.getRoleList());
      return PermissionMethod.access(permissionName, userRoleList);
    },


    logout() {
      Object.assign(AuthClass.store   , AuthClass.getDefault());
      Object.assign(RoleClass.store   , RoleClass.getDefault());
      Object.assign(ProfileClass.store, ProfileClass.getDefault());

      localStorage.setItem('user-token', '');
    },

    authorization( {jwtToken, userInfo}) {
      //# init step 2 verify token
      // let tokenInfo = {};
      // try {
      //   //# TODO: fix
      //   //# tokenInfo = jwtDecode(jwtToken);
      //   tokenInfo = {};
      //
      //   const tokenTime =  tokenInfo.exp;
      //   const realTime = new Date().getTime() / 1000;
      //   if(tokenTime < realTime) {
      //     return false;
      //   }
      //
      // } catch (e) {
      //   console.error('Не удалось установить токен', e);
      //   return false;
      // }

      //# init store
      //
      AuthClass.store.token = jwtToken;
      //
      ProfileClass.store.name = userInfo.name;
      //
      RoleClass.store.role_list = ([ROLE_AUTH]).concat(permissionMethod.clearRoleList(userInfo.roles));

      localStorage.setItem('user-token', jwtToken);
      return true;
    },

  };

  return retObj;
};


export default UserClass;
