import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCE6I5NL8prXtkyA1h8ahIUQxm_ZJe0WH4",
  authDomain: "imoney-530c6.firebaseapp.com",
  projectId: "imoney-530c6",
  storageBucket: "imoney-530c6.appspot.com",
  messagingSenderId: "257172326879",
  appId: "1:257172326879:web:fc7c768c24fecbb86d9c6a",
  measurementId: "G-68DLCZREBJ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectStorage, projectFireStore, timestamp };
