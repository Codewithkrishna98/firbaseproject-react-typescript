// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQXwjUkP8UHQ2BYxlMyG5gV1cn77YhnEU",
  authDomain: "react-project-3c556.firebaseapp.com",
  projectId: "react-project-3c556",
  storageBucket: "react-project-3c556.appspot.com",
  messagingSenderId: "18390466672",
  appId: "1:18390466672:web:e02ebb429dbd74c42b34b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
