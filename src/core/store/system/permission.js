
export default {
  namespaced: true,
  state: {
    userRoleList: [], //[role.ROLE_AUTH, role.ROLE_CASHIER];
  },
  getters: {
    getUserRoleList(state) {
      return state.userRoleList;
    },
  },
  mutations: {
    setUserRoleList(state, list) {
      state.userRoleList = list;
    },
  },
  actions: {
    setUserRoleList({ commit }, list) {
      commit('setUserRoleList', list);
    },
  },
};
