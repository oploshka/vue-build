
export default function () {
  return {
    //
    URL_MODE:                   process.env.VUE_APP_URL_MODE,

    // URL_MODE: URL
    URL_AUTH:                   process.env.VUE_APP_URL_AUTH,
    URL_AUTH_REALM:             process.env.VUE_APP_URL_AUTH_REALM,
    URL_API:                    process.env.VUE_APP_URL_API,
    URL_EXTRACTION:             process.env.VUE_APP_URL_EXTRACTION,

    // URL_MODE: PROXY
    URL_DEV_PROXY_AUTH:         process.env.VUE_APP_URL_DEV_PROXY_AUTH,
    URL_DEV_PROXY_API:          process.env.VUE_APP_URL_DEV_PROXY_API,
    URL_DEV_PROXY_EXTRACTION:   process.env.VUE_APP_URL_DEV_PROXY_EXTRACTION,

    // URL_MODE: SUB_DOMAIN
    URL_SUB_DOMAIN_AUTH:        process.env.VUE_APP_URL_SUB_DOMAIN_AUTH,
    URL_SUB_DOMAIN_API:         process.env.VUE_APP_URL_SUB_DOMAIN_API,
    URL_SUB_DOMAIN_EXTRACTION:  process.env.VUE_APP_URL_SUB_DOMAIN_EXTRACTION,
    //
    ROUTER_PERMISSION_DISABLE:  process.env.VUE_APP_ROUTER_PERMISSION_DISABLE,
  };
}
