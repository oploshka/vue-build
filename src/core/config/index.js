//
let AuthServerUrl = '';
let ApiServerUrl = '';
let MockServerUrl = '';

switch (process.env.VUE_APP_URL_MODE) {
  case 'URL':
    AuthServerUrl   = process.env.VUE_APP_URL_AUTH;
    ApiServerUrl    = process.env.VUE_APP_URL_API;
    MockServerUrl   = process.env.VUE_APP_URL_MOCK;
    break;
  case 'DEV_PROXY':
    AuthServerUrl   = process.env.VUE_APP_URL_DEV_PROXY_AUTH;
    ApiServerUrl    = process.env.VUE_APP_URL_DEV_PROXY_API;
    MockServerUrl   = process.env.VUE_APP_URL_DEV_PROXY_MOCK;
    break;
  case 'SUB_DOMAIN':
    let protocol  = document.location.protocol + '//';
    let host      = document.location.host;
    //
    AuthServerUrl   = protocol + process.env.VUE_APP_URL_SUB_DOMAIN_AUTH + host;
    ApiServerUrl    = protocol + process.env.VUE_APP_URL_SUB_DOMAIN_API  + host;
    MockServerUrl   = protocol + process.env.VUE_APP_URL_SUB_DOMAIN_MOCK + host;
    break;
  default:
    console.error('Unsupported VUE_APP_URL_MODE', process.env.VUE_APP_URL_MODE);
    break;
}

// TODO: fix
const $config = {
  AUTH_API_URL: AuthServerUrl,
  BASE_API_URL: ApiServerUrl,
  MOCK_API_URL: MockServerUrl,
};

export default $config;
