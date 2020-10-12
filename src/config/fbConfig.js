import firebase from "firebase"
import "firebase/storage";
import "@firebase/firestore"
import "firebase/auth";
import ReduxSagaFirebase from "redux-saga-firebase"

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const storage = firebase.storage();
export const db = firebase.firestore();
export const rsf = new ReduxSagaFirebase(firebaseApp)
