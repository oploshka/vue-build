
import { reactive } from 'vue';
import {setAuthInfo} from '@user/core/AuthBrowserStorage';
import AuthProfileModule from '@user/core/module/AuthProfileModule';
import * as pageName from '@router/variable';

const getDefault = () =>  {
  return {
    token:      null,
    tokenInfo:  null,
    userId:     null,
  };
};

const auth = reactive(getDefault());

const isAuth        = () => { return !!auth.token;    };
const getToken      = () => { return auth.token;      };
const getTokenInfo  = () => { return auth.tokenInfo;  };
const getUserId     = () => { return auth.token;      };

export default {
  methods: {
    isAuth()       { return !!auth.token;    },
    getToken()     { return auth.token;      },
    getTokenInfo() { return auth.tokenInfo;  },
    getUserId()    { return auth.userId;      },
    //
    async login(token, tokenInfo) {
      await this.update(token, tokenInfo);
    },
    async authorization(obj) {
      const token       = obj.token || null;
      const tokenInfo   = obj.tokenInfo || null;
      const res = await this.update(token, tokenInfo);
      return res;
    },

    async logout() {
      await this.update(null, null);

      // TODO: fix
      const $router = VueApp ? VueApp.config.globalProperties.$router : null;
      const query = {};
      if($router)

      $router && $router.push({ name: pageName.USER_AUTH });
    },
    async logout401() {
      if(this.isAuth()){
        await this.update(null, null);

        // TODO: fix
        const $router = VueApp ? VueApp.config.globalProperties.$router : null;

        const query = {};
        if($router && $router.currentRoute) {
          query.destination = $router.currentRoute.value.fullPath;
        }

        $router && $router.push({ name: pageName.USER_AUTH, query: query });
      }
    }
  },
  update(token, tokenInfo) {
    if(token) {
      auth.token      = token;
      auth.tokenInfo  = tokenInfo;
      auth.userId     = tokenInfo.sub;
    } else {
      auth.token      = null;
      auth.tokenInfo  = null;
      auth.userId     = null;
    }
  }
};
