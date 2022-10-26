

// TODO: Взять из preset (текущий пресет)
import envPresetFunc from '../preset/env';

const PRESET = envPresetFunc();

//
let AuthServerUrl       = '';
let ApiServerUrl        = '';
let ExtractionServerUrl = '';
let AuthServerRealm     = PRESET.URL_AUTH_REALM; // 'itam' | 'itam-dev';
// let MockServerUrl = '';

switch (PRESET.URL_MODE) {
  case 'URL':
    AuthServerUrl       = PRESET.URL_AUTH;
    ApiServerUrl        = PRESET.URL_API;
    ExtractionServerUrl = PRESET.URL_EXTRACTION;
    // MockServerUrl   = PRESET.URL_MOCK;
    break;
  case 'DEV_PROXY':
    AuthServerUrl       = PRESET.URL_DEV_PROXY_AUTH;
    ApiServerUrl        = PRESET.URL_DEV_PROXY_API;
    ExtractionServerUrl = PRESET.URL_DEV_PROXY_EXTRACTION;
    // MockServerUrl   = PRESET.URL_DEV_PROXY_MOCK;
    break;
  case 'SUB_DOMAIN':
    let protocol  = document.location.protocol + '//';
    let host      = document.location.host;
    //
    AuthServerUrl       = protocol + PRESET.URL_SUB_DOMAIN_AUTH + host;
    ApiServerUrl        = protocol + PRESET.URL_SUB_DOMAIN_API  + host;
    ExtractionServerUrl = protocol + PRESET.URL_SUB_DOMAIN_EXTRACTION  + host;
    // MockServerUrl   = protocol + PRESET.URL_SUB_DOMAIN_MOCK + host;
    break;
  default:
    console.error('Unsupported VUE_APP_URL_MODE', PRESET.URL_MODE);
    break;
}

// TODO: fix
const $config = {
  AUTH_API_URL  : AuthServerUrl,
  AUTH_API_REALM: AuthServerRealm,
  //
  BASE_API_URL: ApiServerUrl,
  EXTRACTION_API_URL: ExtractionServerUrl,
  // MOCK_API_URL: MockServerUrl,
};

export default $config;
