

import * as ApiRequestClientAxios   from './Api/ApiRequestClientAxios';
import ApiMethodInfoPrepare         from './Api/ApiMethodInfoPrepare';
import ApiResponsePrepare           from './Api/ApiResponsePrepare';
//
import * as KeycloakRequestClientAxios  from './Keycloak/KeycloakRequestClientAxios';
import KeycloakMethodInfoPrepare        from './Keycloak/KeycloakMethodInfoPrepare';


export default {
  presets: {
    KEYCLOAK: {
      methodInfoPrepare : KeycloakMethodInfoPrepare,
      requestClient     : KeycloakRequestClientAxios,
      responsePrepare   : ApiResponsePrepare,
    },
    API: {
      methodInfoPrepare : ApiMethodInfoPrepare,
      requestClient     : ApiRequestClientAxios,
      responsePrepare   : ApiResponsePrepare,
    },
    // EXTRACTION: {
    //   methodInfoPrepare : ApiMethodInfoPrepare,
    //   requestClient     : ApiRequestClientAxios,
    //   responsePrepare   : ApiResponsePrepare,
    // },
  },
  getPreset(methodInfo) {
    const providerName = methodInfo.getProviderName();
    if(providerName === 'KEYCLOAK') {
      return 'KEYCLOAK';
    }
    return 'API';
  },

};
