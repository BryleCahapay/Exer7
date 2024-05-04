// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyAHwj9b_Ag50Q0-D5kvDwZCl3t16J-p0Eo",
  authDomain: "advexer7-f4bb1.firebaseapp.com",
  projectId: "advexer7-f4bb1",
  storageBucket: "advexer7-f4bb1.appspot.com",
  messagingSenderId: "952652455617",
  appId: "1:952652455617:web:7d6b21ecfe3ee1979cbe40"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
