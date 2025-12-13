// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrdpa8uqtGN3bsYedY6eWBIrsKJ7rzir8",
  authDomain: "android-33a8e.firebaseapp.com",
  projectId: "android-33a8e",
  storageBucket: "android-33a8e.firebasestorage.app",
  messagingSenderId: "112901312412",
  appId: "1:112901312412:web:fad1047f8ea1bb5a958259",
  measurementId: "G-YDQXNCHFY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
