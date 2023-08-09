// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
const auth = getAuth(app);

// OnSubmit del formulario de Login
export const login = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: res.user };
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
    return { success: false, error: error.message };
  }
};

// OnSubmit del formulario de registro
export const register = async ({ email, password }) => {
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password);
    console.log("respuesta de firebase:", res);
    return { success: true, user: res.user };
  } catch (error) {
    console.error("Error al registrar usuario:", error.message);
    return { success: false, error: error.message };
  }
};

let proveedorGoogle = new GoogleAuthProvider();
export const ingresarConGoogle = async () => {
  let res = signInWithPopup(auth, proveedorGoogle);
  return res;
};
