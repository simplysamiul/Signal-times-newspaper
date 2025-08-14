// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXWXZv7VcHtLmBft6SxS-pEMOo0hXreC8",
  authDomain: "signal-news-auth.firebaseapp.com",
  projectId: "signal-news-auth",
  storageBucket: "signal-news-auth.firebasestorage.app",
  messagingSenderId: "687756993739",
  appId: "1:687756993739:web:2f4dab316ab04b2725e74e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);