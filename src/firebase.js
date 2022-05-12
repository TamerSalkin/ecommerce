import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_GdV0u3tSzlvPa3KHvWLOzLEXn24Nkag",
  authDomain: "e-comm-as-ts.firebaseapp.com",
  projectId: "e-comm-as-ts",
  storageBucket: "e-comm-as-ts.appspot.com",
  messagingSenderId: "99742340814",
  appId: "1:99742340814:web:65134218fe6036962de29f",
  measurementId: "G-243BLNJ3QF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
