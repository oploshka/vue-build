const hostSchema = {
  http : 'http://',
  https: 'https://',
  auth : process.env.VUE_APP_BACKEND_AUTH_API_URL + '/',
  api  : process.env.VUE_APP_BACKEND_API_URL + '/',
  //
  'json-test': '/request/'
};

export default hostSchema;
