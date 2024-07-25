// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiOUF_t7SKt0cfbNJH1uq-BRvhIITf6vM",
  authDomain: "matchme-511f1.firebaseapp.com",
  projectId: "matchme-511f1",
  storageBucket: "matchme-511f1.appspot.com",
  messagingSenderId: "377032861311",
  appId: "1:377032861311:web:b05fbdb8fe293a6bb4814a",
  measurementId: "G-3C9NJHP5XJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getFirestore(app);
export default database;