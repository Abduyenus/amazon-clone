import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBH6qKL_Jk1UH290rAQlhoMdQqNq5jrS1M",
  authDomain: "clone-9c0d8.firebaseapp.com",
  projectId: "clone-9c0d8",
  storageBucket: "clone-9c0d8.appspot.com",
  messagingSenderId: "424473358106",
  appId: "1:424473358106:web:825c0692855637abb806a3",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
