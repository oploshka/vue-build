
export default async function UserInit(User) {

  // init step 1 (load BrowserStorage)
  let token = localStorage.getItem('user-token') || '';
  if(!token){
    return User;
  }

  //# verify token

  //# load additional info
  // TODO: fix
  const userInfo = {
    name: "tester",
    roles: [],
  };

  //# init store
  User.authorization({jwtToken:token, userInfo});
}
