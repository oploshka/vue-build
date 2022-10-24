import { reactive } from 'vue';

const getDefault = () => {
  return {
    //
    employee: null,
    login: '',
    id: '',
  };
};

const profile = reactive(getDefault());

export default {
  methods: {
    profile: {
      getLogin() {
        return profile.login;
      },
      getId() {
        return profile.id;
      },
      getEmployee() {
        return profile.employee;
      },
      // getName()       { return profile.name; },
      // getEmail()      { return profile.mail; },
      // getProfileObj() { return profile; },
    },
  },
  async update(token, tokenInfo) {
    if (token) {
      try {
        const { item } = await RequestManager.SystemUser.getById({ id: tokenInfo.sub });

        profile.id = tokenInfo.sub;
        profile.employee = item.employee;
        profile.login = item.username;
      } catch (error) {}
    } else {
      profile.id = '';
      profile.login = '';
      profile.employee = null;
    }
  },
};
