import {messaging} from './firebase.js';


export function requestNotificationPermission(cb_ok, cb_err){
  messaging.requestPermission()
  .then(function() {
    console.log('Notification permission granted.');
    
    messaging.getToken()
     .then(function(currentToken) {
       if (currentToken) {
          cb_ok(currentToken);
       } else {
          // Show permission request.
          console.log('No Instance ID token available. Request permission to generate one.');
          // Show permission UI.
  //        updateUIForPushPermissionRequired();
  //        setTokenSentToServer(false);
       }
     })
     .catch(function(err) {
        console.log('An error occurred while retrieving token. ', err);
        
        cb_err(err);
  //      showToken('Error retrieving Instance ID token. ', err);
  //      setTokenSentToServer(false);
     });
  })
  .catch(function(err) {
    
    cb_err(err.message);
    console.log('Unable to get permission to notify.', err);
  });
}


messaging.onTokenRefresh(function() {
  messaging.getToken()
  .then(function(refreshedToken) {
    console.log('Token refreshed.');
    // Indicate that the new Instance ID token has not yet been sent to the
    // app server.
//    setTokenSentToServer(false);
    // Send Instance ID token to app server.
    sendTokenToServer(refreshedToken);
    // ...
  })
  .catch(function(err) {
    console.log('Unable to retrieve refreshed token ', err);
//    showToken('Unable to retrieve refreshed token ', err);
  });
});


function sendTokenToServer(token){
  console.log("sendTokenToServer");
}
