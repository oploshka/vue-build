
//
import initUser from '@user/initUser';
import UserClass from '@user/UserClass';

//
import initPermission from '@user/initPermission';


const User = new UserClass();
initPermission();

export default async function () {

  if( global.USER ) {
    console.error('Duplicate user init');
    return global.USER;
  }
  await initUser(User);

  return User;
}
