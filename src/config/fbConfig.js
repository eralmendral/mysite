import firebase from 'firebase'
import '@firebase/firestore'
import ReduxSagaFirebase from 'redux-saga-firebase'

export const firebaseConfig = {
    apiKey: "AIzaSyBg_9g0fSqQ6asP68w81pr5GY1dosbSOsM",
    authDomain: "mysite-a8cf4.firebaseapp.com",
    databaseURL: "https://mysite-a8cf4.firebaseio.com",
    projectId: "mysite-a8cf4",
    storageBucket: "mysite-a8cf4.appspot.com",
    messagingSenderId: "227209888066",
    appId: "1:227209888066:web:76cece7df9b471df92c8db",
    measurementId: "G-8B73XC7L04"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export const rsf = new ReduxSagaFirebase(firebaseApp)