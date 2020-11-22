
export default  {
  state: {
    grid: {
      display: 'sm', // sm md lg
    },
  },
  getters: {
    grid_getDisplay(state) {
      return state['grid']['display'];
    },
  },
  mutations: {
    setDisplay (state, display) {
      state['grid']['display'] = display;
    },
  },
  actions: {

    grid_updateDisplay({ state, getters, commit, dispatch }, display) {
      commit('setDisplay', display);
    }
  }
};
