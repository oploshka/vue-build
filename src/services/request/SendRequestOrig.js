import axios from 'axios';

// const prepareUrl = function (requestType, requestUrl, requestData) {};
// const prepareRequestType = function (requestType, requestUrl, requestData) {};
// const prepareData = function (requestType, requestUrl, requestData) {};

export default function SendRequest (requestType, requestUrl, requestData, methodFiles = [], requestPrepare = null ) {

  // const requestType = prepareRequestType(requestType, requestUrl, requestData)
  // const requestUrl = prepareUrl(requestType, requestUrl, requestData)
  // const requestData = prepareData(requestType, requestUrl, requestData)

  const axiosObject = {
    method: requestType,
    url: requestUrl,
    headers: {}
    // data: requestData
  };

  // let token = localStorage.getItem('user-token');
  // axiosObject.headers['Authorization'] = `Bearer ${token}`;

  // fix get and post
  if (requestType === 'GET') {
    axiosObject.params = requestData;
  } else if (requestType === 'POST_MULTIPART') {
    axiosObject.method = 'POST';
    const json = JSON.stringify(requestData);
    let formData = new FormData();
    formData.append("data", json);
    for(let key in methodFiles) {
      formData.append(key, methodFiles[key]);
    }
    axiosObject.data = formData;
    axiosObject.headers['content-type'] = "multipart/form-data";
  } else {
    const json = JSON.stringify(requestData);
    axiosObject.data = json;
    axiosObject.headers['content-type'] = "application/json";
  }

  return axios(axiosObject)
    .then(function (response) {

      // ответ успешный?
      if (
        !response
        || !response.data
        || !Object.prototype.hasOwnProperty.call(response.data, "result")
      ) {
        // throw response;
        return new Promise(function(resolve, reject) {
          reject(response);
        });
      }

      return requestPrepare ? requestPrepare(response.data.result) : response.data.result;
    })
    .catch(function (error) {

      // TODO: fix token error
      // if(
      //   error && error.response && error.response.status
      //   && error.response.status === 401
      // ) {
      //   VueApp.$store.dispatch('user/logout',  {});
      //   setTimeout(() => {
      //     VueApp.$router.push('/auth');
      //   }, 100);
      // }
      console.error(error);

      return new Promise(function(resolve, reject) {
        reject({
          errorCode: error.data.error.code,
          errorMessage: error.data.error.message,
          success: false,
          logError: error
        });
      });
    });

}
