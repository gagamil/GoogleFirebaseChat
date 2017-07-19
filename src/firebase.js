 import * as firebase from "firebase";
 
 var config = {
    apiKey: "AIzaSyDI7L2s17B8HVu9FU_9HtatQe-dX3q_zno",
    authDomain: "reactchatapp-98f21.firebaseapp.com",
    databaseURL: "https://reactchatapp-98f21.firebaseio.com",
    projectId: "reactchatapp-98f21",
    storageBucket: "reactchatapp-98f21.appspot.com",
    messagingSenderId: "174159155651"
  };
firebase.initializeApp(config);
export const messaging = firebase.messaging();
console.log('Firebase initialized');

