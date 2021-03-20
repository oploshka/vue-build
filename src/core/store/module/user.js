// import Vue from "vue";
// import router from '@router';
// import * as pageName from "@router/variable";

import jwtDecode from "jwt-decode";

export default  {
  namespaced: true,
  state: {
    token : '',
    user  : null,
  },
  getters: {
    isAuth        (state) { return !!state.token;                             },
    getToken      (state) { return state.token;                               },
    getTokenInfo  (state) { return state.user;                                },
    userRoles     (state) { return state.user?.roles ? state.user.roles : []; },
  },
  mutations: {
    setToken: (state, token) => {
      const clearToken = () => {
        state.user  = null
        state.token = '';
        localStorage.setItem('user-token', '');
      }

      if(!token) {
        clearToken();
        return;
      }

      try {
        const tokenInfo = jwtDecode(token);

        const tokenTime =  tokenInfo.exp;
        const realTime = new Date().getTime() / 1000;
        if(tokenTime < realTime) {
          clearToken();
          // dispatch('logout');
          // await router.push({ name: pageName.AUTH });
          // Vue.dialogs.alert('Время сессии истекло', {title: 'Ошибка', size: 'sm'});
        }

        state.user  = tokenInfo
        state.token = token;
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

