
import { reactive } from 'vue';

const getDefault = () =>  {
  return {
    //
    companyName          :  '',
    countryOfResidence   :  '',
    hobbiesAndInterests  :  '',
    birthday             :  null,
    communitiesEntity    :  [],
    familyStatus         :  '',
    firstName            :  '',
    gender               :  '',
    lastName             :  '',
    login                :  '',
    mail                 :  '',
    additionalMail       :  '',
    //password             :  '',
    profilePhoto         : null
  };
};

const profile = reactive(getDefault());

export default {
  store: profile,
  getDefault: getDefault,
  methods: {
    //
    getName()       { return profile.name; },
    getEmail()      { return profile.mail; },
    getProfileObj() { return profile; },

  }
};
