
import {MethodInfo} from 'js-request-manager';

export default {

  authorization: ({login, password}) => {
    return new MethodInfo({
      name  : 'authorization',
      type  : 'POST',
      url   : 'auth://authorize',
      params: {
        get: {},
        post: {login, password},
      },
      responsePrepare: (data) => {
        return {token: data.jwt};
      },
      provider: 'KEYCLOAK',
    });
  },


};

