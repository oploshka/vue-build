import SendRequest from './SendRequest';

export default function () {

  const baseApiUrl = CONST.BACKEND_API_URL;
  const sendRequestRpc = (methodName, methodData, methodFiles = [], requestPrepare = null ) => {

    let sessionToken = localStorage.getItem('session-token');

    if(sessionToken) {
      methodData.session = sessionToken;
    }

    return SendRequest('POST_MULTIPART', baseApiUrl + '?m=' + methodName, {
      "jsonrpc": "2.0",
      "method": methodName,
      "params": methodData,
      "id": null
    }, methodFiles, requestPrepare);
  };

  return {
/*
    User: {
      auth (data) {
        return sendRequestRpc('User::auth', data);
      },
      registration (data) {
        return sendRequestRpc('User::registration', data);
      },
    },

    Page: {
      getById(id) {
        return sendRequestRpc('Page::getById',
          {
            pageId: id,
          },
          {},
          (responseData) => { return new PageClass(responseData); });
      },

      create(pageClass) {
        return sendRequestRpc(
          'Page::create',
          {
            type: pageClass.getType(),
            name: pageClass.getName(),
            description: pageClass.getDescription(),
            date: pageClass.getDate(),
          }
        );
      },

      update(pageClass) {
        return sendRequestRpc(
          'Page::update',
          {
            id: pageClass.getId(),
            type: pageClass.getType(),
            name: pageClass.getName(),
            description: pageClass.getDescription(),
            date: pageClass.getDate(),
          }
        );
      },

      getListFull() {
        return sendRequestRpc('Page::getListFull');
      },
    }
*/
  };
}
