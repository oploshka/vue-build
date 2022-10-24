
import AuthCore from '@user/core/AuthCore';

export default async function () {
  if( global.USER ) {
    console.error('Duplicate user init');
    return global.USER;
  }

  const $user = await AuthCore();
  return $user;
}
