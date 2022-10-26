
import {MethodInfo} from 'js-request-manager';

export default {

  getNewsList: () => {
    return new MethodInfo({
      name: 'getNewsList',
      type: 'GET',
      url: 'api://news',
      params: {
        get: {},
        post: {},
      },
      errorMessage: `Не удалось получить список новостей`,
      provider: 'API',
    });
  },

  getNewsById: ({id}) => {
    return new MethodInfo({
      name: 'getTransactionInfo',
      type: 'GET',
      url: 'api://news/' + id,
      params: {
        get: {},
        post: {},
      },
      errorMessage: `Новость ${id} не найдена`,
      provider: 'API',
    });
  },

};
