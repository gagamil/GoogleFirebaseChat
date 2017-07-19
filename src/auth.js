let isUserAuthenticated = false;

const Auth = {
  isAuthenticated: ()=>{return isUserAuthenticated},
  authenticate(cb_ok, cb_err, username, deviceId) {
    fetch(
    '<TODO: SERVER_REST_API_ENDPOINT>',
    {
        method: 'post',
        body: JSON.stringify({
            username:username,
            deviceId:deviceId
        }),
        mode: 'no-cors',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
    }
    ).then(function(res){
      if(res.ok) {//200-299 assume ok
        return res.json();
      }
      throw new Error('Cannot create user with given username.');
    }).then(function(json){
      //set username given in localStorage
      cb_ok();
    }).catch(function(error) {
      cb_err(error.message);
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  }
};
export default Auth;