// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC9w2LzQwFzqR9GOAa9mJh90g0uueHdV0",
  authDomain: "visa-navigator-42502.firebaseapp.com",
  projectId: "visa-navigator-42502",
  storageBucket: "visa-navigator-42502.firebasestorage.app",
  messagingSenderId: "659063547406",
  appId: "1:659063547406:web:3c0faf3cad8fce19b4fe5f",
  measurementId: "G-Q96NCE80QM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
