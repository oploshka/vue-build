import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

global.VueStore = new Vuex.Store({
  modules: {
    // TODO
  },
})

export default global.VueStore
