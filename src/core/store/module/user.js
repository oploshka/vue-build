// import Vue from "vue";
// import router from '@router';
// import * as pageName from "@router/variable";

import jwtDecode from "jwt-decode";

const getDefaultProfile = () => {
  return  {
    login : '',
    name  : '',
  };
};

export default  {
  namespaced: true,
  state: {
    //
    token : '',
    //
    roleList: [],
    // profile
    profile: getDefaultProfile(),
  },
  getters: {
    isAuth          (state) { return !!state.token;   },
    getUserToken    (state) { return state.token;     },
    getUserRoleList (state) { return state.roleList;  },
    getUserProfile  (state) { return state.profile;   },
  },
  mutations: {
    setUserToken: (state, token) => {
      const clearToken = () => {
        state.token     = '';
        state.roleList  = '';
        state.profile   = getDefaultProfile();
        localStorage.setItem('user-token', '');
      };

      if(!token) {
        clearToken();
        return;
      }

      try {
        const tokenInfo = jwtDecode(token);

        // validate token
        const tokenTime =  tokenInfo.exp;
        const realTime = new Date().getTime() / 1000;
        if(tokenTime < realTime) {
          clearToken();
        }

        state.token     = token;
        state.roleList  = '';
        state.profile   = {
          login : tokenInfo.login,
          name  : tokenInfo.name,
        };
        localStorage.setItem('user-token', token);

      } catch (e) {
        console.error('Не удалось установить токен', e);
        clearToken();
      }
    },
  },
  actions: {
     init: async ({ commit /*, getters, dispatch */ }) => {
      let token = localStorage.getItem('user-token') || '';
      token && await commit('setToken', token);
    },
    logout: async ({ commit /*, dispatch */ }) => {
      await commit('setToken', '');
    }
  }
};

