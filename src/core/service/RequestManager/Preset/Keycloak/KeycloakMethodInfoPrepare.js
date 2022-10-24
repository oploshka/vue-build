
export const RequestPrepareData = (requestType, requestUrl, requestData) => {
  return requestData;
};

export const RequestPrepareType = (requestType, requestUrl, requestData) => {
  return requestType;
};

export const RequestPrepareUrl  = (requestType, requestUrl, requestData) => {
  return requestUrl.getUrl();
};

export default {
  prepareData: RequestPrepareData,
  prepareType: RequestPrepareType,
  prepareUrl : RequestPrepareUrl,
};
