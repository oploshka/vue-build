
import * as RequestClientAxios from 'js-request-manager/src/Preset/RequestClient/Axios/RequestClientAxios';

import axios from 'axios';

function isEmpty(value) {
  return Boolean(value && typeof value === 'object') && !Object.keys(value).length;
}

export const clientResponseToObject = RequestClientAxios.clientResponseToObject;
export const isNetworkError         = RequestClientAxios.isNetworkError;

/**
 * @param {RequestClass} requestClass
 * @returns {Object} Произвольные данные в приемлемом формате для отправки
 */
export const requestToClientObject = (requestClass) => {
  const axiosObj = {
    method  : requestClass.getType(),
    url     : requestClass.getUrl(),
    headers : {
      'content-type': 'application/x-www-form-urlencoded'
    }
  };
  // axiosObj.responseType = 'application/json';

  if(requestClass.getMethodInfo().getFileName())     { axiosObj.responseType = 'blob'; }
  const params = requestClass.getParams()
  if(!isEmpty(params.get))  { axiosObj.params  = params.get; }
  if(!isEmpty(params.post)) {
    // https://axios-http.com/docs/urlencoded
    const urlObj = new URLSearchParams();
    for(let key in params.post) {
      urlObj.append(key, params.post[key]);
    }
    axiosObj.data    = urlObj;
  }

  return axiosObj;
};

export const prepareClientObject = async(axiosObject, requestClass) => {

  // let token = localStorage.getItem('user-token');
  // if (token) {
  //   axiosObject.headers['Authorization'] = `Bearer ${token}`;
  // }

  return axiosObject;
};

export const send = async(obj) => {
  return await axios(obj);
};
