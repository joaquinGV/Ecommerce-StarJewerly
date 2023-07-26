// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCivsZjmJ9mglB3-FGCnyGNBMX55B9tnug",
  authDomain: "mooncy-1ddff.firebaseapp.com",
  projectId: "mooncy-1ddff",
  storageBucket: "mooncy-1ddff.appspot.com",
  messagingSenderId: "205270289",
  appId: "1:205270289:web:aec43478847484467e30b0",
  measurementId: "G-2RKXNGXBW7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
