import firebase from "firebase";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBQTxeDkyQ7zhH7NdHxixnm10K4pPOsB_I",
  authDomain: "c-chat-webapp.firebaseapp.com",
  projectId: "c-chat-webapp",
  storageBucket: "c-chat-webapp.appspot.com",
  messagingSenderId: "467911139454",
  appId: "1:467911139454:web:625bf994749ad6cda6b82f",
  measurementId: "G-FQDBZBMN95",
});

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export default firebaseApp;
