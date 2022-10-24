export default {
  getItem(name, type) {
    let str = localStorage.getItem(name) || '';
    switch (type) {
      case 'STRING':
        return str;
      case 'INTEGER':
        return parseInt(str);
      case 'OBJECT':
      case 'ARRAY':
        return JSON.parse(str);
    }
    return ''
  },
  setItem(name, value) {
    let setValue = value;
    if(typeof value === 'object' ) {
      setValue = JSON.stringify(value);
    }

    localStorage.setItem(name, setValue);
  },

  //
  // // setters
  // setToken(token){
  //   localStorage.setItem(PATH_TOKEN, token);
  // },
  // setProfile(profile){
  //   localStorage.setItem(PATH_PROFILE, profile ? JSON.stringify(profile) : '' );
  // },
  // setRoleList(roleList){
  //   localStorage.setItem(PATH_ROLE_LIST, roleList ? JSON.stringify(roleList) : '' );
  // },
  //
  // // getters
  // getToken() {
  //   let str = localStorage.getItem(PATH_TOKEN) || '';
  //   return str;
  // },
  // getProfile()  {
  //   let str = localStorage.getItem(PATH_PROFILE) || '';
  //   let strObj = false;
  //   try {
  //     strObj = str ? JSON.parse(str) : false;
  //   } catch(e) {
  //     console.warn(e);
  //   }
  //
  //   return (strObj && strObj.constructor === Object) ? strObj : {};
  // },
  // getRoleList() {
  //   let str = localStorage.getItem(PATH_ROLE_LIST) || '';
  //   let strArr = false;
  //   try {
  //     strArr = str ? JSON.parse(str) : false;
  //   } catch (e) {
  //     console.warn(e);
  //   }
  //
  //   return Array.isArray(strArr) ? strArr : [];
  // }
};
