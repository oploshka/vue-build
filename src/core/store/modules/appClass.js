
export default  {
  namespaced: true,
  state: {
    // user
    user: {
      'user-auth': true
    },
    // grid
    grid: {
      'grid-xs': true,
    }
  },
  getters: {
    getClass(state) {
      return state; // TODO: get Class list
    },
  },
  mutations: {
    // global
    // addClass (state, className) {
    //   state[className] = true;
    // },
    // addClassList (state, classList) {
    //   for (let i = 0; i < classList.length; i++){
    //     const className = classList[i];
    //     state[className] = true;
    //   }
    // },
    // removeClass (state, className) {
    //   delete state[className];
    // },
    // user
    // grid

    replaceGroupClass(state, obj) {
      const groupName = obj.name;
      const classList = obj.classList;

      for (let key in state[groupName]){
        delete state[groupName][key];
      }
      for (let i = 0; i < classList.length; i++){
        const className = classList[i];
        state[groupName][className] = true;
      }
    },

  },
};
