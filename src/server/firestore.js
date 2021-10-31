import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2YSeuNl86MFnFA0d_3tDJJKuj2EdnJs0",
  authDomain: "linkedin-clone-1fd03.firebaseapp.com",
  projectId: "linkedin-clone-1fd03",
  storageBucket: "linkedin-clone-1fd03.appspot.com",
  messagingSenderId: "751180399675",
  appId: "1:751180399675:web:46aae2df47dca0f28e081e",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.firestore();

export { db, auth };
