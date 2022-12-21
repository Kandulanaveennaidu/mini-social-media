// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSeN_yXXbJJyEeZ0BNBDBjUk9mfRd2gNw",
  authDomain: "drive-6bcc8.firebaseapp.com",
  databaseURL: "https://drive-6bcc8-default-rtdb.firebaseio.com",
  projectId: "drive-6bcc8",
  storageBucket: "drive-6bcc8.appspot.com",
  messagingSenderId: "235988909769",
  appId: "1:235988909769:web:9da0eb76ee3a397f075718"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
