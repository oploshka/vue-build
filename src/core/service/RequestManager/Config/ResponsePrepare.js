
export default {
  isError(riObject) {
    if( !(200 <= riObject.httpStatus && riObject.httpStatus < 300) ) {
      return true;
    }
    return false;
  },
  getErrorInfo: async (riObject, requestClass, Config) => {
    let message = '';
    if (riObject.data.error) {
      message = riObject.data.error;
    }

    return {
      code: 'error',
      message: message || 'Неизвестная ошибка',
      data: riObject.data,
    };
  },
  getSuccessInfo: async (riObject, requestClass, Config) => {
    return riObject.data;
  },
};


