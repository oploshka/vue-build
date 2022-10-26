
import * as RequestClientAxios from 'js-request-manager/src/Preset/RequestClient/Axios/RequestClientAxios';

import axios from 'axios';

export const clientResponseToObject = RequestClientAxios.clientResponseToObject;
export const requestToClientObject  = RequestClientAxios.requestToClientObject;
export const isNetworkError         = RequestClientAxios.isNetworkError;

export const prepareClientObject = async(axiosObject, requestClass) => {

  let token = localStorage.getItem('user-token');

  if (token) {
    axiosObject.headers['Authorization'] = `Bearer ${token}`;
  }

  if(!axiosObject.params) {
    axiosObject.params = {};
  }

  axiosObject.params['q'] = requestClass.getName();

  return axiosObject;
};

export const send = async(obj) => {
  return await axios(obj);
};
