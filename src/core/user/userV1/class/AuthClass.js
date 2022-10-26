
import { reactive } from 'vue';

// import jwtDecode from 'jwt-decode';

const getDefault = () => {
  return {
    userId: '',
    token: '',
    // cert      : '',
    // life_time : 0,
  };
};

const auth = reactive(getDefault());

export default {
  store: auth,
  getDefault: getDefault,
  methods: {
    //
    getToken    () { return auth.token;      },
    getUserId   () { return auth.userId;     },
    getTokenDecode() {
      // return jwtDecode(auth.token);
      return {};
    },
    // getCert     () { return auth.cert;       },
    // getLifeTime () { return auth.life_time;  },
    //
    // setToken    (value) { BrowserStorage.setItem(TOKEN     , value); auth.token     = value; },
    // TODO  - private method
    // setCert     (value) { BrowserStorage.setItem(CERT      , value); auth.cert      = value; },
    // setLifeTime (value) { BrowserStorage.setItem(LIFE_TIME , value); auth.life_time = value; },
  },
  logout() {
    Object.assign(auth, getDefault());
  },
  init() {
    // init
    // try {
    //   let token     = BrowserStorage.getItem(TOKEN     , 'STRING');
    //   let cert      = BrowserStorage.getItem(CERT      , 'STRING');
    //   let life_time = BrowserStorage.getItem(LIFE_TIME , 'NUMBER');
    //   let role_list = BrowserStorage.getItem(ROLE_LIST , 'ARRAY' );
    //
    //   if(token) {
    //     this.#auth.token      = token     ;
    //     this.#auth.cert       = cert      ;
    //     this.#auth.life_time  = life_time ;
    //     this.#auth.role_list  = role_list ;
    //   }
    // } catch (e) {
    //   // return e;
    // }
  },
};
