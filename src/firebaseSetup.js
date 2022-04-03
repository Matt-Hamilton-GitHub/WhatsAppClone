// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA4sZ_gaJEZgHZ7HlyX_7LKNh_dJRmksPM",
    authDomain: "whatsapp-7ad09.firebaseapp.com",
    projectId: "whatsapp-7ad09",
    storageBucket: "whatsapp-7ad09.appspot.com",
    messagingSenderId: "1026731372556",
    appId: "1:1026731372556:web:429a86c4f7b560806dfe29",
    measurementId: "G-C9JL4Z4CQ7"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  //authintication
  // const auth = firebaseApp.auth()
  // const provider = new firebaseApp.auth.GoogleAuthProvider();

  // export {auth, provider}
  export default db;