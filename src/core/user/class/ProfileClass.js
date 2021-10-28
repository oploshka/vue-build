import Vue from 'vue';

const getDefault = () =>  {
  return {
    name         : '',
  };
};

const profile = Vue.observable(getDefault());

export default {
  store: profile,
  getDefault: getDefault,
  methods: {
    //
    getName()            { return profile.name; },

  }
};
