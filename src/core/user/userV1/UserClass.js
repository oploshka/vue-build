//
import AuthClass from '@user/class/AuthClass';
import RoleClass from '@user/class/RoleClass';
import ProfileClass from '@user/class/ProfileClass';
//
import PermissionMethod from '@permission/permissionMethod';
import {ROLE_ANONYMOUS, ROLE_AUTH} from '@permission/_old/roleName';
//
// import BrowserStorage from '@user/helper/BrowserStorage';
// import jwtDecode from 'jwt-decode';
// import permissionMethod from '@permission/permissionMethod';
import parseJwt from '@user/helper/parseJwt';

// TODO: fix pageName - использовать единое имя $routeName || $pageName ???
import * as pageName from '@router/variable';


//
const Auth    = AuthClass.methods;
const Role    = RoleClass.methods;
const Profile = ProfileClass.methods;

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

      // TODO: fix
      const $router = VueApp ? VueApp.config.globalProperties.$router : null;
      $router && $router.push({ name: pageName.USER_AUTH });
    },

    // разлогиниться если произошла ошибка сети 401
    logout401() {
      if(isAuth()){
        // TODO: fix
        DIALOG.notify.error('401 - ошибка токена');
        this.logout();
      }
    },

    // TODO: promise
    async authorization( {token, userInfo}) {
      //# init step 2 verify token
      let tokenInfo = {};
      try {
        //# TODO: fix
        //# tokenInfo = jwtDecode(jwtToken);
        tokenInfo = parseJwt(token);

        const tokenTime =  tokenInfo.exp;
        const realTime = new Date().getTime() / 1000;
        if(tokenTime < realTime) {
          console.error('Токен просрочен');
          this.logout();
          return false;
        }

      } catch (e) {
        console.error('Не удалось установить токен', e);
        return false; // TODO: use exception
      }

      // let profile = userInfo;
      // if(!userInfo){
      //   profile = await RequestManager.Auth.getInfo({userId: tokenInfo.sub, token: token});
      // }

      //# init store
      //
      AuthClass.store.token = token;
      AuthClass.store.userId = tokenInfo.sub;
      // //
      // ProfileClass.store.companyName          = profile.companyName;
      // ProfileClass.store.countryOfResidence   = profile.countryOfResidence;
      // ProfileClass.store.hobbiesAndInterests  = profile.hobbiesAndInterests;
      // ProfileClass.store.birthday             = profile.birthday;
      // ProfileClass.store.communitiesEntity    = profile.communitiesEntity;
      // ProfileClass.store.familyStatus         = profile.familyStatus;
      // ProfileClass.store.firstName            = profile.firstName;
      // ProfileClass.store.gender               = profile.gender;
      // ProfileClass.store.lastName             = profile.lastName;
      // ProfileClass.store.login                = profile.login;
      // ProfileClass.store.mail                 = profile.mail;
      // ProfileClass.store.additionalMail       = profile.additionalMail;
      // // ProfileClass.store.password             = profile.password;
      // ProfileClass.store.profilePhoto         = profile.profilePhoto;
      // //
      RoleClass.store.role_list = [ROLE_AUTH]; // ([ROLE_AUTH]).concat(permissionMethod.clearRoleList(userInfo.roles));

      localStorage.setItem('user-token', token);
      return true;
    },

  };

  return retObj;
};


export default UserClass;
