/*
Здесь мы описываем 2 функции - записать данные в хранилище и считать их

В дальнейшем скорее всего придеться использовать объект и кешу.
 */

export const getAuthInfo = () => {
  return localStorage.getItem('user-token') || '';
};

export const setAuthInfo = (authInfo) => {
  const t = authInfo || '';
  return localStorage.setItem('user-token', t);
};
