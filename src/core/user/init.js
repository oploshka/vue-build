import Vue from 'vue';

//
import initUser from "@user/initUser";
import UserClass from "@user/UserClass";

//
import initPermission from "@user/initPermission";


const User = new UserClass();
initPermission();

export default async function () {

  if(global.User || Vue.prototype.$user) {
    console.error('Duplicate user init');
    return User;
  }
  await initUser(User);

  return User;
}
