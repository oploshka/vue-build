
import {MethodInfo} from 'js-request-manager';

export default {

  getCityList: () => {
    return new MethodInfo({
      name: 'getCityList',
      type: 'GET',
      url: 'api://city',
      params: {
        get: {},
        post: {},
      },
      // responsePrepare: () => {},
      // errorMessage: '',
    });
  },
};
