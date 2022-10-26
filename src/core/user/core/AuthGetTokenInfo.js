
import parseJwt from '@user/core/helper/parseJwt';

const AuthGetTokenInfo = async (token) => {
  let tokenInfo = {};
  try {
    tokenInfo = parseJwt(token);

    const tokenTime =  tokenInfo.exp;
    const realTime = new Date().getTime() / 1000;
    if(tokenTime < realTime) {
      console.error('Токен просрочен');
      // TODO: use exception object
      throw 'Токен просрочен';
    }

  } catch (e) {
    console.error('Не удалось установить токен', e);
    throw e;
  }

  return tokenInfo;
};

export default AuthGetTokenInfo;
