// Import the functions you need from the SDKs you need
// src/firebase.js
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyC5OjgmOVqV5wFubg-pvW7s_PGH0D5KerQ",
authDomain: "login-demo-5b070.firebaseapp.com",
projectId: "login-demo-5b070",
storageBucket: "login-demo-5b070.firebasestorage.app",
messagingSenderId: "995717792957",
appId: "1:995717792957:web:3477071ccc86ebe4d863d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Auth & Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };