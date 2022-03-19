
import { reactive } from 'vue';

const getDefault = () =>  {
  return {
    //
    login                :  '',
    firstName            :  '',
    lastName             :  '',
    mail                 :  '',
  };
};

const profile = reactive(getDefault());

export default {
  store: profile,
  getDefault: getDefault,
  methods: {
    //
    getName()            { return profile.name; },
    getProfileObj()      { return profile; },

  }
};
