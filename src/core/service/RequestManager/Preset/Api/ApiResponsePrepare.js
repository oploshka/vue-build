import fileDownload from 'js-file-download';

export const getErrorNetworkMessage = () => {};

/**
 * Ответ успешный ?
 * @param {ResponseClass} responseClass
 * @param {RequestClass} requestClass
 * @returns {boolean}
 */
export const isSuccess = (responseClass, requestClass) => {
  const httpStatus = responseClass.getHttpStatus();
  if (!(200 <= httpStatus && httpStatus < 300)) {
    // TODO: fix
    if (httpStatus === 401) {
      USER && USER.logout401();
    }

    return false;
  }

  return true;
};

// TODO: упростить в 1 метод? (isSuccess + getSuccessInfo)
/**
 * Ответ успешный ?
 * @param {ResponseClass} responseClass
 * @param {RequestClass} requestClass
 * @returns {} Можно вернуть что угодно
 */
export const getSuccessInfo = async (responseClass, requestClass) => {
  let data = responseClass.getDataObj();

  const settings = requestClass.getMethodInfo().getSettings();

  if (data instanceof Blob && requestClass.getName().includes('download')) {
    data = await fileDownload(data, requestClass.getMethodInfo().getFileName());
    return {};
  }
  // TODO: test (getErrorCode load)
  return data.data || data;
};

/**
 * @returns {[((function(ResponseClass): Promise<{code: string, message: string, data: {Object}}>)|*)]}
 */
export const errorHandlerList = [
  async (responseClass, requestClass) => {
    if (responseClass.getHttpStatus() === 401) {
      return {
        code: 'ERROR_STATIC',
        message: 'Недействительные учетные данные пользователя',
        details: {
          responseClass: responseClass,
          requestClass: requestClass,
        },
      };
    }
  },
  async (responseClass, requestClass) => {
    const errorData = responseClass.getDataObj();
    if (errorData?.error?.message || errorData?.error_description) {
      return {
        code: 'ERROR_STATIC',
        message: errorData.error.message || errorData.error_description,
        details: {
          responseClass: responseClass,
          requestClass: requestClass,
        },
      };
    }
  },
  async (responseClass, requestClass) => {
    return {
      code: 'ERROR_STATIC',
      message: 'Неопределенная ошибка',
      details: {
        responseClass: responseClass,
        requestClass: requestClass,
      },
    };
  },
];

export default {
  getErrorNetworkMessage: getErrorNetworkMessage,
  isSuccess: isSuccess,
  getSuccessInfo: getSuccessInfo,
  errorHandlerList: errorHandlerList,
};
