
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider , getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAohwOb01XDNXcamVTJ7IoLtiqBldGW_t4",
  authDomain: "myfirebaseapp-e992e.firebaseapp.com",
  projectId: "myfirebaseapp-e992e",
  storageBucket: "myfirebaseapp-e992e.appspot.com",
  messagingSenderId: "39688878569",
  appId: "1:39688878569:web:ada92a4da32b7979f87378",
  measurementId: "G-RYK21BE2Z2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider()

