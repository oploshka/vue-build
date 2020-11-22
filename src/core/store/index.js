import Vue from "vue";
import Vuex from "vuex";

// modules
import user from "./modules/user";
import grid from "./modules/grid";
import appClass from "./modules/appClass";
import system from "./modules/system";

// справочники
import cityCollection               from "@/core/store/modules/cityCollection";
// import ConferenceTagCollection      from "@/core/store/modules/ConferenceTagCollection";
// import ConferenceUserRoleCollection from "@/core/store/modules/ConferenceUserRoleCollection";

// demo



Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const modules = {
  user,
  grid,
  appClass,
  system,

  //
  cityCollection,
  //
  // ConferenceTagCollection,
  // ConferenceUserRoleCollection,

  //

};

const store = new Vuex.Store({
  modules: modules,
  strict: debug,
});

// Автоматически запустить действие `init` для каждого существующего модуля
for (const moduleName of Object.keys(modules)) {
  if (modules[moduleName].actions && modules[moduleName].actions.init) {
    store.dispatch(`${moduleName}/init`);
  }
}

export default store;
