export const RequestPrepareData = (requestType, requestUrl, requestData) => {
  if (requestType === 'GET') {
    return requestData;
  }

  if (requestData.post instanceof FormData) {
    return {
      get: requestData.get || {},
      post: requestData.post,
    };
  }

  return {
    get: requestData.get || {},
    post: {
      language: 'rus',
      version: '1.0.0',
      data: requestData.post || {},
    },
  };
};

export const RequestPrepareType = (requestType, requestUrl, requestData) => {
  return requestType;
};

export const RequestPrepareUrl = (requestType, requestUrl, requestData) => {
  return requestUrl.getUrl();
};

export default {
  prepareData: RequestPrepareData,
  prepareType: RequestPrepareType,
  prepareUrl: RequestPrepareUrl,
};
