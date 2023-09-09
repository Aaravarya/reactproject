// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import {}
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl-upVcQfsBTBD-Gl8tb-PIU3NHwjvQ8Q",
  authDomain: "react-project-ce0ae.firebaseapp.com",
  projectId: "react-project-ce0ae",
  storageBucket: "react-project-ce0ae.appspot.com",
  messagingSenderId: "575109724933",
  appId: "1:575109724933:web:ad6237821ccbbe2be1156c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider= new GoogleAuthProvider();
export const db = getFirestore(app);